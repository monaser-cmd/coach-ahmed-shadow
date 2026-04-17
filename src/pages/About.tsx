import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MapPin, 
  Briefcase, 
  Trophy, 
  Link as LinkIcon, 
  Calendar, 
  UserPlus, 
  MessageCircle, 
  ThumbsUp,
  MessageSquare,
  Share2,
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
  Globe,
  Camera
} from "lucide-react";
import coachImg from "@/assets/coach-portrait-2.jpeg";
import coverImg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";

// Transformation images for the gallery
import t1 from "@/assets/transform-1.jpeg";
import t2 from "@/assets/transform-2.jpeg";
import t3 from "@/assets/transform-3.jpeg";
import t4 from "@/assets/transform-4.jpeg";
import t5 from "@/assets/transform-5.jpeg";
import t6 from "@/assets/transform-6.jpeg";

const transformations = [t1, t2, t3, t4, t5, t6];

const About = () => {
  const [links, setLinks] = useState<Record<string, string>>({
    whatsapp: "+20 123 456 7890",
    instagram: "https://instagram.com/ahmedshady10_official/",
    facebook: "https://facebook.com/ahmed.shady.944",
  });

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [300, 400], [0, 1]);
  const headerY = useTransform(scrollY, [300, 400], [-20, 0]);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("site_settings").select("*");
      if (!error && data) {
        const settings = data.reduce((acc: Record<string, string>, curr) => {
          acc[curr.key] = curr.value;
          return acc;
        }, {});
        setLinks(prev => ({ ...prev, ...settings }));
      }
    };
    fetchLinks();
  }, []);

  const timelineItems = [
    {
      year: "2018",
      title: "Bodybuilding Debut",
      description: "Participated in first local tournament, securing a top 5 finish.",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2020",
      title: "Shadow Realm Launch",
      description: "Started online coaching to help people achieve science-based transformations.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "2000+ Success Stories",
      description: "Reached a milestone of helping over 2000 clients worldwide.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      year: "Today",
      title: "Professional Coach",
      description: "Leading one of the most effective transformation programs in the region.",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  return (
    <main className="bg-[#0B0B0F] min-h-screen text-[#E4E4E7] font-sans">
      <Navbar />

      {/* Sticky Mini Header */}
      <motion.div 
        style={{ opacity: headerOpacity, y: headerY }}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#121217]/95 backdrop-blur-md border-b border-white/5 py-3 px-4 hidden md:block"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={coachImg} alt="Ahmed Shady" className="w-10 h-10 rounded-full object-cover border border-[#FF1E3C]/50" />
            <div>
              <h3 className="font-bold text-sm">Ahmed Shady</h3>
              <p className="text-[#A1A1AA] text-xs">Professional Fitness Coach</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-[#FF1E3C] hover:bg-[#FF1E3C]/90 text-white font-bold px-6">
              <UserPlus className="w-4 h-4 mr-2" /> Follow
            </Button>
            <Button size="sm" variant="outline" className="border-white/10 hover:bg-white/5 px-6">
              <MessageCircle className="w-4 h-4 mr-2" /> Message
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Profile Header Area */}
      <div className="bg-[#121217]">
        <div className="container mx-auto max-w-6xl">
          {/* Cover Photo */}
          <div className="relative h-[250px] md:h-[400px] w-full rounded-b-xl overflow-hidden group">
            <img src={coverImg} alt="Cover" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E3C]/10 to-transparent" />
            <Button variant="ghost" className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10">
              <Camera className="w-4 h-4 mr-2" /> Edit Cover Photo
            </Button>
          </div>

          {/* Header Content */}
          <div className="px-4 pb-6 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-8 gap-6">
              <div className="relative group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#121217] overflow-hidden bg-[#0B0B0F] relative">
                  <img src={coachImg} alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-[#00A400] border-4 border-[#121217] rounded-full" />
              </div>

              <div className="flex-1 text-center md:text-left mb-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Ahmed Shady</h1>
                  <CheckCircle2 className="w-6 h-6 text-[#1877F2] fill-[#1877F2] bg-white rounded-full p-0.5" />
                </div>
                <p className="text-[#A1A1AA] font-medium mt-1">Professional Fitness Coach & Bodybuilder</p>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                  <span className="text-sm font-bold">2.4K</span>
                  <span className="text-sm text-[#A1A1AA]">Followers</span>
                  <span className="mx-1 text-[#A1A1AA]">•</span>
                  <span className="text-sm font-bold">500</span>
                  <span className="text-sm text-[#A1A1AA]">Following</span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Button className="bg-[#FF1E3C] hover:bg-[#FF1E3C]/90 text-white font-bold h-10 px-6 shadow-[0_0_20px_rgba(255,30,60,0.3)]">
                  <UserPlus className="w-4 h-4 mr-2" /> Follow
                </Button>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 h-10 px-6 bg-white/5">
                  <MessageCircle className="w-4 h-4 mr-2" /> Message
                </Button>
              </div>
            </div>
            
            <div className="border-t border-white/5 mt-6 pt-4 flex gap-6 overflow-x-auto no-scrollbar">
              {['Posts', 'About', 'Mentors', 'Photos', 'Videos', 'Check-ins', 'More'].map((tab) => (
                <button 
                  key={tab} 
                  className={`text-sm font-bold pb-4 transition-colors relative whitespace-nowrap ${tab === 'About' ? 'text-[#FF1E3C]' : 'text-[#A1A1AA] hover:text-[#E4E4E7]'}`}
                >
                  {tab}
                  {tab === 'About' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF1E3C] rounded-t-full" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {/* Intro Card */}
            <div className="bg-[#121217] rounded-xl p-4 border border-white/5 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Intro</h2>
              <p className="text-center text-sm mb-4 leading-relaxed">
                "I build high-performance digital experiences that merge design, strategy, and technology."
              </p>
              <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-sm font-bold h-9">Edit Bio</Button>
              
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Briefcase className="w-5 h-5 text-[#A1A1AA]/70" />
                  <span>Coach at <span className="text-[#E4E4E7] font-bold">Shadow Realm Fitness</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Trophy className="w-5 h-5 text-[#A1A1AA]/70" />
                  <span>Professional Bodybuilding Competitor</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <MapPin className="w-5 h-5 text-[#A1A1AA]/70" />
                  <span>Lives in <span className="text-[#E4E4E7] font-bold">Alexandria, Egypt</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Instagram className="w-5 h-5 text-[#A1A1AA]/70" />
                  <a href={links.instagram} target="_blank" className="text-[#FF1E3C] hover:underline">@ahmedshady10</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Facebook className="w-5 h-5 text-[#A1A1AA]/70" />
                  <a href={links.facebook} target="_blank" className="text-[#FF1E3C] hover:underline">Ahmed Shady</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Globe className="w-5 h-5 text-[#A1A1AA]/70" />
                  <span className="text-[#FF1E3C]">ahmedshady.com</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-white/5 border-white/10 hover:bg-white/10 text-sm font-bold h-9">Edit Details</Button>
            </div>

            {/* Photos Card */}
            <div className="bg-[#121217] rounded-xl p-4 border border-white/5 shadow-xl overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Photos</h2>
                <button className="text-[#FF1E3C] text-sm hover:underline">See all photos</button>
              </div>
              <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden border border-white/10">
                {transformations.map((img, i) => (
                  <div key={i} className="aspect-square relative group cursor-pointer">
                    <img src={img} alt={`Photo ${i}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#FF1E3C]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Life Events (Timeline as Card) */}
            <div className="bg-[#121217] rounded-xl p-4 border border-white/5 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Life Events</h2>
                <button className="text-[#FF1E3C] text-sm hover:underline">See all</button>
              </div>
              <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
                {timelineItems.map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/10 flex items-center justify-center z-10 text-[#FF1E3C] shadow-[0_0_15px_rgba(255,30,60,0.2)]">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#FF1E3C] uppercase tracking-widest">{item.year}</p>
                      <h4 className="font-bold text-sm mt-0.5">{item.title}</h4>
                      <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="lg:col-span-7 space-y-4">
            {/* Create Post Card */}
            <div className="bg-[#121217] rounded-xl p-4 border border-white/5 shadow-xl">
              <div className="flex gap-3">
                <img src={coachImg} alt="Ahmed Shady" className="w-10 h-10 rounded-full border border-white/10" />
                <button className="flex-1 bg-white/5 hover:bg-white/10 rounded-full text-left px-4 text-[#A1A1AA] text-sm transition-colors">
                  What's on your mind?
                </button>
              </div>
              <div className="border-t border-white/5 mt-4 pt-3 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <span className="text-red-500">📷</span> Photos
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <span className="text-blue-500">👥</span> Tag Friends
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <span className="text-yellow-500">😊</span> Feeling
                </button>
              </div>
            </div>

            {/* About Me Post */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#121217] rounded-xl border border-white/5 shadow-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <img src={coachImg} alt="Ahmed Shady" className="w-10 h-10 rounded-full border border-white/10" />
                    <div>
                      <h3 className="font-bold text-sm hover:underline cursor-pointer">Ahmed Shady</h3>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <span>Pinned Post</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-[#A1A1AA]" />
                </div>
                <div className="mt-4 space-y-4">
                  <p className="text-sm leading-relaxed">
                    I'm Ahmed Shady. I've been in bodybuilding for some years now. I have experience and I participated in tournaments.
                  </p>
                  <p className="text-sm leading-relaxed">
                    My mission is to help you achieve the transformation you've always dreamed of through science-based training and nutrition. Whether you're looking to compete or just want to feel better in your own skin, I'm here to guide you every step of the way.
                  </p>
                  <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                    <img src={transformations[0]} alt="Featured Transformation" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-[#FF1E3C]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center -space-x-1">
                  <div className="w-5 h-5 bg-[#1877F2] rounded-full flex items-center justify-center border-2 border-[#121217] z-30">
                    <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                  <div className="w-5 h-5 bg-[#FF1E3C] rounded-full flex items-center justify-center border-2 border-[#121217] z-20">
                    <span className="text-[8px] text-white">❤️</span>
                  </div>
                  <span className="pl-3 text-xs text-[#A1A1AA]">2.1K</span>
                </div>
                <div className="flex gap-3 text-xs text-[#A1A1AA]">
                  <span>45 Comments</span>
                  <span>12 Shares</span>
                </div>
              </div>
              <div className="px-2 py-1 border-t border-white/5 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors group">
                  <ThumbsUp className="w-4 h-4 group-hover:text-[#FF1E3C]" /> Like
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4" /> Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </motion.div>

            {/* Transformation Result Post */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#121217] rounded-xl border border-white/5 shadow-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <img src={coachImg} alt="Ahmed Shady" className="w-10 h-10 rounded-full border border-white/10" />
                    <div>
                      <h3 className="font-bold text-sm hover:underline cursor-pointer">Ahmed Shady</h3>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <span>2 days ago</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-[#A1A1AA]" />
                </div>
                <div className="mt-4">
                  <p className="text-sm mb-4">Another transformation achieved! More than 2000 clients have changed their lives through the Shadow Realm program. Are you next?</p>
                  <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden border border-white/10">
                    <img src={transformations[1]} alt="Before" className="w-full h-auto aspect-[3/4] object-cover" />
                    <img src={transformations[2]} alt="After" className="w-full h-auto aspect-[3/4] object-cover" />
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 border-t border-white/5 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors group">
                  <ThumbsUp className="w-4 h-4 group-hover:text-[#FF1E3C]" /> Like
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4" /> Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </motion.div>

            {/* Testimonial Post */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#121217] rounded-xl border border-white/5 shadow-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1E3C] to-[#121217] flex items-center justify-center font-bold border border-white/10">JD</div>
                    <div>
                      <h3 className="font-bold text-sm hover:underline cursor-pointer">John Doe</h3>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <span>1 week ago</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-[#A1A1AA]" />
                </div>
                <div className="mt-4">
                  <p className="text-sm italic leading-relaxed text-[#E4E4E7]/90 bg-white/5 p-4 rounded-lg border-l-4 border-[#FF1E3C]">
                    "Joining the Shadow Realm program was the best decision for my fitness journey. Ahmed doesn't just give you a plan; he gives you the knowledge to sustain it. 15kg down and feeling like a new person!"
                  </p>
                </div>
              </div>
              <div className="px-2 py-1 border-t border-white/5 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors group">
                  <ThumbsUp className="w-4 h-4 group-hover:text-[#FF1E3C]" /> Like
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4" /> Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:bg-white/5 flex-1 justify-center py-2 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </motion.div>

            {/* Contact Post */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#121217] rounded-xl border border-white/5 shadow-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#FF1E3C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF1E3C]">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Ready to deploy?</h2>
              <p className="text-[#A1A1AA] text-sm mb-6">Start your journey with professional guidance. Click below to initiate transmission.</p>
              <Button className="bg-[#FF1E3C] hover:bg-[#FF1E3C]/90 text-white font-bold h-12 px-10 rounded-xl w-full md:w-auto">
                CONTACT ME
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .glow-cyan {
          text-shadow: 0 0 10px rgba(38, 188, 196, 0.5);
        }
        .shadow-neon {
          box-shadow: 0 0 20px rgba(255, 30, 60, 0.3);
        }
      `}</style>
    </main>
  );
};

export default About;
