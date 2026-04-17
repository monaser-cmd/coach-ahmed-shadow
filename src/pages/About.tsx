import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Briefcase, 
  Trophy, 
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
  Camera,
  MoreHorizontal,
  Heart,
  Quote
} from "lucide-react";
import coachImg from "@/assets/coach-portrait-2.jpeg";
import coverImg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const { data, error } = await supabase.from("site_settings").select("*");
        if (!error && data) {
          const settings = data.reduce((acc: Record<string, string>, curr) => {
            acc[curr.key] = curr.value;
            return acc;
          }, {});
          setLinks(prev => ({ ...prev, ...settings }));
        }
      } catch (e) {
        console.error("Supabase fetch error:", e);
      }
    };
    fetchLinks();
  }, []);

  const whatsappNumber = links.whatsapp?.replace(/\D/g, '') || "201234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const timelineItems = [
    {
      year: "2016",
      title: "بداية الرحلة",
      description: "نزلت الجيم وبدأت آكل الحديد.. مجهود جبار بس النتائج كانت لسه بعيدة.",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2019",
      title: "بطل العالم في سوء التغذية 😂",
      description: "دخلت بطولة وما عملتش تطور 20% حتى، بس كان حافز إني أكمل وألاقي الطريق الصح.",
      icon: <Quote className="w-5 h-5" />
    },
    {
      year: "2021",
      title: "نقطة التحول",
      description: "بدأت التدريب في الجيم 16 ساعة يومياً.. شهور من التعب صنعت الخبرة الحقيقية.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "اليوم",
      title: "+3000 قصة نجاح",
      description: "بفضل الله، عملاء من كل محافظات مصر وخارجها.. والرحلة لسه مستمرة.",
      icon: <Heart className="w-5 h-5" />
    }
  ];

  return (
    <main className="bg-[#0B0B0F] min-h-screen text-[#E4E4E7] font-sans pt-20" dir="rtl">
      <Navbar />

      {/* Profile Header Area */}
      <div className="bg-[#121217]">
        <div className="container mx-auto max-w-6xl">
          {/* Cover Photo */}
          <div className="relative h-[250px] md:h-[400px] w-full rounded-b-xl overflow-hidden group">
            <img src={coverImg} alt="Cover" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E3C]/10 to-transparent" />
          </div>

          {/* Header Content */}
          <div className="px-4 pb-6 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-8 gap-6">
              <div className="relative group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#121217] overflow-hidden bg-[#0B0B0F] relative">
                  <img src={coachImg} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-4 left-4 w-5 h-5 bg-[#00A400] border-4 border-[#121217] rounded-full" />
              </div>

              <div className="flex-1 text-center md:text-right mb-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">أحمد شادي</h1>
                  <CheckCircle2 className="w-6 h-6 text-[#1877F2] fill-[#1877F2]" />
                </div>
                <p className="text-[#A1A1AA] font-medium mt-1">خريج تربية رياضية • خبرة 10 سنوات • 23 سنة</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                  <span className="text-sm font-bold text-white">139K <span className="text-[#A1A1AA] font-normal">متابع</span></span>
                  <span className="text-sm font-bold text-white">927 <span className="text-[#A1A1AA] font-normal">يتابع</span></span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#FF1E3C] hover:bg-[#FF1E3C]/90 text-white font-bold h-10 px-6 shadow-[0_0_20px_rgba(255,30,60,0.3)]">
                    <UserPlus className="w-4 h-4 ml-2" /> متابعة
                  </Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 h-10 px-6 bg-white/5 text-white">
                    <MessageCircle className="w-4 h-4 ml-2" /> رسالة
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container mx-auto max-w-6xl px-4 py-8 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Intro Card */}
            <div className="bg-[#121217] rounded-xl p-6 border border-white/5 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-white">نبذة</h2>
              <p className="text-sm mb-6 leading-relaxed text-[#E4E4E7]">
                أنا شاب زيي زيك وفي نفس سنك.. علاقتنا هتكون صديق وصديقه مش كوتش ومتدرب، وهدفي أوصلك للي عملته في 10 سنين في سنة واحدة بس.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Briefcase className="w-5 h-5 opacity-70" />
                  <span>خريج <span className="text-white font-bold">تربية رياضية (4 سنوات)</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Trophy className="w-5 h-5 opacity-70" />
                  <span>خبرة <span className="text-white font-bold">10 سنوات</span> في المجال</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <MapPin className="w-5 h-5 opacity-70" />
                  <span>الإسكندرية، مصر</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Instagram className="w-5 h-5 opacity-70" />
                  <a href={links.instagram} target="_blank" className="text-[#FF1E3C] hover:underline" dir="ltr">@ahmedshady10</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                  <Facebook className="w-5 h-5 opacity-70" />
                  <a href={links.facebook} target="_blank" className="text-[#FF1E3C] hover:underline" dir="ltr">Ahmed Shady</a>
                </div>
              </div>
            </div>

            {/* Photos Card */}
            <div className="bg-[#121217] rounded-xl p-6 border border-white/5 shadow-xl overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">الصور</h2>
                <Link to="/transformations" className="text-[#FF1E3C] text-sm hover:underline">عرض الكل</Link>
              </div>
              <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden border border-white/10">
                {transformations.map((img, i) => (
                  <div key={i} className="aspect-square relative group cursor-pointer">
                    <img src={img} alt={`تحول ${i}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#FF1E3C]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Life Events */}
            <div className="bg-[#121217] rounded-xl p-6 border border-white/5 shadow-xl">
              <h2 className="text-xl font-bold mb-6 text-white">أحداث هامة</h2>
              <div className="space-y-6 relative before:absolute before:right-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
                {timelineItems.map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/10 flex items-center justify-center z-10 text-[#FF1E3C] shadow-[0_0_15px_rgba(255,30,60,0.1)]">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#FF1E3C] uppercase tracking-widest">{item.year}</p>
                      <h4 className="font-bold text-sm mt-0.5 text-white">{item.title}</h4>
                      <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="lg:col-span-7 space-y-6">
            {/* The "Why Me" Post */}
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
                      <h3 className="font-bold text-sm text-white">أحمد شادي</h3>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <span>منشور مثبت</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-[#A1A1AA]" />
                </div>
                <div className="mt-4 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-xl border-r-4 border-primary">
                    <p className="text-lg font-bold text-white mb-2">ليه تتدرب معايا؟</p>
                    <p className="text-sm leading-relaxed text-[#E4E4E7]">
                      الفكرة إني غلطت غلطة مش هخليك تقع فيها.. اللي أنا عملته في 10 سنين أنت هتعمله في سنة واحدة بس. لما أديك عصارة خبرتي وغلطاتي اللي مستحيل تكررها معايا، ده هيفرق معاك جداً. التطورات اللي كانت بتاخد سنة، هتعملها في شهر!
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#E4E4E7]">
                    أنا خريج تربية رياضية، درست وامتحنت عشان أعرف إزاي أمرنك بأفضل وأسلم طريقة علمية ممكنة.
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-white/5 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FF1E3C] transition-colors"><ThumbsUp className="w-4 h-4" /> أعجبني</button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA]"><MessageSquare className="w-4 h-4" /> تعليق</button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA]"><Share2 className="w-4 h-4" /> مشاركة</button>
              </div>
            </motion.div>

            {/* My Story Post */}
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
                      <h3 className="font-bold text-sm text-white">أحمد شادي</h3>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <span>قصتي الكاملة</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#E4E4E7]">
                  <p>
                    في 2016 بدأت الجيم، كنت باكل الحديد وبمرن نفسي بكل طاقتي. في 2019، الصدمة كانت إني ما عملتش تطور 20% حتى! 😂 دخلت بطولة وعشان ميزعلوناش أدونا كلنا مركز أول. بقيت "بطل العالم في سوء التغذية".
                  </p>
                  <p>
                    بس كان عندي هدف.. في 2021، طلبت من الكابتن إني أبقى مدرب. قالي هتمسك الفترة الصباحية من الفجر للضهر. لما مدرب الفترة التانية مشي، عرضت آخد الشفتين.. كنت بشتغل من 14 لـ 16 ساعة يومياً! شهور من التعب خلتني أكتسب خبرة عمري كلها.
                  </p>
                  <p>
                    بدأت أحوش وأجهز لبطولات، وأنزل يومياتي ع الميديا. بدأت الأونلاين بـ بوست واحد، جالي صحابي، بعدين ناس من المنطقة، بعدين أول عميل من القاهرة، بعدين إسكندرية.. وفجأة، بفضل الله، تجاوز عدد عملائي الـ 3000 عميل داخل وخارج مصر!
                  </p>
                  <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
                    <p className="text-lg font-bold text-primary mb-2">أنت ناوي تكون جزء من قصتي؟</p>
                    <p>أصلي ناوي أكون جزء من قصة نجاحك..</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-white/5 flex items-center justify-around">
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FF1E3C] transition-colors"><ThumbsUp className="w-4 h-4" /> أعجبني</button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA]"><MessageSquare className="w-4 h-4" /> تعليق</button>
                <button className="flex items-center gap-2 text-sm text-[#A1A1AA]"><Share2 className="w-4 h-4" /> مشاركة</button>
              </div>
            </motion.div>

            {/* Final CTA Post */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FF1E3C] to-[#0B0B0F] p-10 rounded-xl text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10">
                <Heart className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
                <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-tighter">بحبكم في الله</h2>
                <p className="text-white/90 text-lg mb-8 font-medium">جاهز تبدأ رحلتك؟ أنا مستني رسالتك دلوقتي.</p>
                <a href="https://www.easykash.net/Ahmed%20Shadoow/pay" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-[#FF1E3C] hover:bg-[#F4F4F5] font-bold h-14 px-12 rounded-2xl text-lg shadow-xl hover:scale-105 transition-all">
                    ابدأ التحول الآن
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default About;
