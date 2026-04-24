import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Pencil } from "lucide-react";
import defaultAvatar from "@/assets/avatar.png";
import { AvatarEditor, loadStoredAvatar } from "./AvatarEditor";

export const Hero = () => {
  const [avatarSrc, setAvatarSrc] = useState<string>(defaultAvatar);
  const [editorOpen, setEditorOpen] = useState(false);
  const [hasCustom, setHasCustom] = useState(false);

  useEffect(() => {
    const stored = loadStoredAvatar();
    if (stored) {
      setAvatarSrc(stored);
      setHasCustom(true);
    }
  }, []);

  const handleSave = (dataUrl: string | null) => {
    if (dataUrl) {
      setAvatarSrc(dataUrl);
      setHasCustom(true);
    } else {
      setAvatarSrc(defaultAvatar);
      setHasCustom(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 px-6 overflow-hidden flex items-center"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.button
            type="button"
            onClick={() => setEditorOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative group"
            aria-label="Edit profile photo"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-primary blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="glass-strong relative w-32 h-32 rounded-full p-1.5 overflow-hidden">
              <img
                src={avatarSrc}
                alt="Salman Younus"
                width={256}
                height={256}
                className="w-full h-full rounded-full object-cover"
              />
              <span className="absolute inset-1.5 rounded-full bg-foreground/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Pencil className="w-5 h-5 text-white" />
              </span>
            </div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 80, damping: 18 }}
            className="glass-chip"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Open to Opportunities
          </motion.div>

          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 60, damping: 18 }}
              className="font-display font-semibold text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              <span className="block text-foreground">Salman</span>
              <span className="block text-shimmer">Younus</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg font-medium tracking-wide text-muted-foreground"
            >
              AI Engineer · DevOps Engineer · Security Researcher
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Building intelligent systems. Automating infrastructure. Breaking things ethically.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 18 }}
            className="flex flex-wrap gap-3 justify-center pt-2"
          >
            <a href="#projects" className="glass-button-primary group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#contact" className="glass-button">
              Get in Touch
            </a>
            <button type="button" onClick={() => setEditorOpen(true)} className="glass-button">
              <Pencil className="w-4 h-4 text-primary" />
              {hasCustom ? "Change Photo" : "Upload Photo"}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AvatarEditor
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        onSave={handleSave}
        currentSrc={hasCustom ? avatarSrc : null}
      />
    </section>
  );
};
