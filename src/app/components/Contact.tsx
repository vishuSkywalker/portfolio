import { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { motion, useInView, useAnimation, useMotionTemplate, useMotionValue } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // --- Spotlight Effect Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate delay for the "viral" animation feel (remove setTimeout in production)
    // Real fetch:
    const response = await fetch(`https://formspree.io/f/mdaklnoz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('success');
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('idle');
      toast.error('Failed to send message.');
    }
  };    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vishumaurya7@gmail.com', href: 'mailto:vishumaurya7@gmail.com', color: 'bg-rose-100 text-rose-600' },
    { icon: Phone, label: 'Phone', value: '+91 8076368308', href: 'tel:+918076368308', color: 'bg-emerald-100 text-emerald-600' },
    { icon: MapPin, label: 'Location', value: 'New Delhi, India', href: "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D", color: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-slate-50 overflow-hidden relative" ref={ref}>
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <motion.div 
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
        className="container mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
            <motion.h2 
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="text-4xl md:text-5xl font-bold text-slate-900"
            >
                Let's Start a Conversation
            </motion.h2>
            <motion.div 
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            />
            <motion.p 
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
                Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
            </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
                <motion.div 
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="space-y-6"
                >
                    {contactInfo.map((info) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            className="flex items-center gap-6 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                        >
                            <div className={`p-4 rounded-full ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                                <info.icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">{info.label}</p>
                                <p className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {info.value}
                                </p>
                            </div>
                            <ArrowRight className="ml-auto text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Socials */}
                <motion.div 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.4 } } }}
                    className="pt-8 border-t border-slate-200"
                >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow my journey</h3>
                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: 'https://github.com/vishuSkywalker', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/vishumaurya78285', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:vishumaurya7@gmail.com', label: 'Email' }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white text-slate-600 rounded-full shadow-sm border border-slate-100 hover:bg-slate-900 hover:text-white transition-all hover:-translate-y-1"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Spotlight Form */}
            <div className="relative group" onMouseMove={handleMouseMove}>
                {/* Spotlight Gradient Layer */}
                <motion.div
                    className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                650px circle at ${mouseX}px ${mouseY}px,
                                rgba(37, 99, 235, 0.15),
                                transparent 80%
                            )
                        `
                    }}
                />
                
                <motion.div
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-6">
                            {['name', 'email', 'subject'].map((field) => (
                                <div key={field} className="relative group/input">
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        id={field}
                                        value={(formData as any)[field]}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-blue-600 focus:outline-none transition-colors"
                                        placeholder={field}
                                    />
                                    <label
                                        htmlFor={field}
                                        className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all 
                                                 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3
                                                 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 capitalize"
                                    >
                                        Your {field}
                                    </label>
                                </div>
                            ))}
                            
                            <div className="relative group/input">
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-blue-600 focus:outline-none transition-colors resize-none"
                                    placeholder="Message"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-sm text-blue-600 transition-all 
                                             peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3
                                             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                                >
                                    Your Message
                                </label>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status !== 'idle'}
                            className={`w-full relative overflow-hidden rounded-lg py-4 font-semibold text-white transition-all
                                ${status === 'success' ? 'bg-emerald-500' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25'}
                            `}
                            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                        >
                           <div className="relative z-10 flex items-center justify-center gap-2">
                                {status === 'idle' && (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                                {status === 'submitting' && (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sending...</span>
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle2 size={20} />
                                        <span>Message Sent!</span>
                                    </>
                                )}
                           </div>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}