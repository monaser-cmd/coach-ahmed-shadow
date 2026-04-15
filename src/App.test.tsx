import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the Canvas component as it might cause issues in test environment
vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useThree: () => ({ camera: { position: { x: 0, y: 0, z: 0 } } }),
  useFrame: vi.fn(),
}));

// Mock GSAP
vi.mock("gsap", () => ({
  default: {
    to: vi.fn(),
  },
}));

describe("App Routing", () => {
  it("renders Index page on / route", async () => {
    window.history.pushState({}, "Home", "/");
    render(<App />);
    // Index page has "Ahmed Shady" in Hero and About sections
    const elements = await screen.findAllByText(/AHMED SHADY/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it("renders About page on /about route", async () => {
    window.history.pushState({}, "About", "/about");
    render(<App />);
    expect(await screen.findByText(/ABOUT/i)).toBeDefined();
  });

  it("renders Transformations page on /transformations route", async () => {
    window.history.pushState({}, "Transformations", "/transformations");
    render(<App />);
    const elements = await screen.findAllByText(/TRANSFORMATIONS/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it("renders Packages page on /packages route", async () => {
    window.history.pushState({}, "Packages", "/packages");
    render(<App />);
    expect(await screen.findByText(/CHOOSE .../i)).toBeDefined();
  });

  it("renders Contact page on /contact route", async () => {
    window.history.pushState({}, "Contact", "/contact");
    render(<App />);
    expect(await screen.findByText(/CONTACT/i)).toBeDefined();
  });
});
