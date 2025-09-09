import type { FC } from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer: FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                                JUCAMAL
                            </h2>
                            <span className="text-blue-400 font-medium text-sm tracking-wider">TECNOLOGÍA</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed max-w-md">
                            Desarrollamos soluciones tecnológicas impulsadas por inteligencia artificial que transforman la forma en que las empresas operan y crecen.
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-sm">
                            <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-blue-400">1</div>
                                <div className="text-xs text-gray-400">Proyectos</div>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-blue-400">99%</div>
                                <div className="text-xs text-gray-400">Satisfacción</div>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-blue-400">24/7</div>
                                <div className="text-xs text-gray-400">Soporte</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
                        <ul className="space-y-3">
                            {[
                                "Inteligencia Artificial",
                                "Desarrollo de Software",
                                "Aplicaciones Móviles",
                                "Consultoría Tech",
                                "Automatización",
                                "Soporte 24/7"
                            ].map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="text-sm text-gray-300">
                                    <p>Calle 7 N # 10E-25, Segundo piso</p>
                                    <p>Edf Fatima II, Barrio Santa Lucía,</p>
                                    <p>Cúcuta 540003, Norte de Santander</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <Phone className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="text-sm text-gray-300">
                                    <p>+57 322-2573-306</p>
                                    <p>+57 310-6983-769</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="text-sm text-gray-300">
                                    <p>Lun - Vie: 8:00 am - 5:00 pm</p>
                                    <p>Sáb: 8:00 am - 12:00 m</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="text-sm text-gray-300">
                                    <p>directoradministrativo@jucamal.com</p>
                                    <p>gerencia@jucamal.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        <div className="text-sm text-gray-400">
                            © 2025 Jucamal Tecnología. Todos los derechos reservados.
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400 mr-2">Síguenos:</span>
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Youtube, href: "#", label: "Youtube" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200 group"
                                >
                                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </a>
                            ))}
                        </div>

                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Términos de Servicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;