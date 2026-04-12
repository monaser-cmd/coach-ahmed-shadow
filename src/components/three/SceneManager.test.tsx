import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import SceneManager from "./SceneManager";
import { useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

// Mock R3F and react-router-dom hooks
vi.mock("@react-three/fiber", () => ({
  useThree: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

// Mock GSAP
vi.mock("gsap", () => ({
  default: {
    to: vi.fn(),
  },
}));

describe("SceneManager", () => {
  const mockCamera = {
    position: { x: 0, y: 0, z: 0 },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useThree as any).mockReturnValue({ camera: mockCamera });
  });

  it("should animate camera to / position", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });
    render(<SceneManager />);

    expect(gsap.to).toHaveBeenCalledWith(mockCamera.position, expect.objectContaining({
      x: 0,
      y: 0,
      z: 10,
    }));
  });

  it("should animate camera to /about position", () => {
    (useLocation as any).mockReturnValue({ pathname: "/about" });
    render(<SceneManager />);

    expect(gsap.to).toHaveBeenCalledWith(mockCamera.position, expect.objectContaining({
      x: 10,
      y: 2,
      z: 5,
    }));
  });
});
