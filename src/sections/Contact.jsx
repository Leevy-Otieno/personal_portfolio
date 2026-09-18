import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  Frown,
  Sparkles,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "otienoleevy@gmail.com",
    href: "mailto:otienoleevy@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 791086979",
    href: "tel:+254791086979",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });
  const [isDrippingAway, setIsDrippingAway] = useState(false);

  // Trigger liquid drip-away sequence after 6 seconds
  useEffect(() => {
    if (submitStatus.type) {
      setIsDrippingAway(false);

      // Start dripping animation at 5.2s so it melts smoothly and clears at 6s
      const dripTimer = setTimeout(() => {
        setIsDrippingAway(true);
      }, 5200);

      const removeTimer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
        setIsDrippingAway(false);
      }, 6000);

      return () => {
        clearTimeout(dripTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [submitStatus.type]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you right away.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-slate-950 text-slate-100"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-slate-100">
            Let's build{" "}
            <span className="font-serif italic font-normal text-blue-300">
              something great.
            </span>
          </h2>
          <p className="text-slate-300 animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 shadow-xl shadow-blue-950/20 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name or Organisation..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 text-slate-100 placeholder:text-slate-500 rounded-xl border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 text-slate-100 placeholder:text-slate-500 rounded-xl border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-slate-950 text-slate-100 placeholder:text-slate-500 rounded-xl border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Glowing Animated Send Button Container */}
              <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

                <Button
                  className="relative w-full bg-slate-950 hover:bg-slate-900 text-white font-medium py-3 rounded-xl transition-all duration-300 border border-blue-500/40 flex items-center justify-center gap-2 group-hover:text-blue-200 overflow-hidden"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2 text-cyan-300 animate-fade-in">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="animate-pulse tracking-wide font-semibold">
                        Sending message...
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-cyan-400" />
                    </span>
                  )}
                </Button>
              </div>

              {/* Status Feedback Card with Initial Bounce & Water Drip Exit after 6s */}
              {submitStatus.type && (
                <div
                  className={`relative overflow-hidden flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-700 ease-in-out ${
                    isDrippingAway
                      ? "translate-y-16 scale-y-125 scale-x-90 skew-x-6 opacity-0 blur-md duration-800"
                      : "translate-y-0 scale-100 opacity-100 animate-bounce"
                  } ${
                    submitStatus.type === "success"
                      ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20"
                      : "bg-rose-950/40 border-rose-500/50 text-rose-300 shadow-rose-500/20"
                  }`}
                >
                  {/* Outer Glow Halo for Status Card */}
                  <div
                    className={`absolute -inset-1 rounded-xl blur-md pointer-events-none ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/20"
                        : "bg-rose-500/20"
                    }`}
                  />

                  {/* Water Droplet Icon visual effect during liquefying melt */}
                  {isDrippingAway && (
                    <Droplets className="absolute right-4 bottom-2 w-6 h-6 text-cyan-400 animate-bounce" />
                  )}

                  {submitStatus.type === "success" ? (
                    <>
                      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
                        <Sparkles className="w-3 h-3 text-emerald-300 absolute -top-1 -right-1 animate-spin" />
                      </div>
                      <div className="relative z-10 pt-1">
                        <p className="font-semibold text-emerald-200 text-sm">
                          Woohoo! Received 🎉
                        </p>
                        <p className="text-xs text-emerald-300/90 mt-0.5">
                          {submitStatus.message}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 shrink-0">
                        <Frown className="w-5 h-5 text-rose-400 animate-bounce" />
                      </div>
                      <div className="relative z-10 pt-1">
                        <p className="font-semibold text-rose-200 text-sm">
                          Uh oh, failed to send! 😔
                        </p>
                        <p className="text-xs text-rose-300/90 mt-0.5">
                          {submitStatus.message}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-md rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-slate-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/60 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50" />
                <span className="font-medium text-slate-100">
                  Currently Available
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
