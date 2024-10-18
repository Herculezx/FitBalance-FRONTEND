import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importando os ícones
import { motion, AnimatePresence } from 'framer-motion'; // Importando do framer-motion

const Dropdown = ({ titulo, videoSrc, paragrafo, conteudo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-md md:max-w-xl flex flex-col items-center border-b py-4">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 text-white bg-3d rounded-xl focus:outline-none flex items-center"
            >
                {isOpen ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
                {isOpen ? 'Ocultar' : 'Mostrar'} {conteudo}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, maxHeight: 0 }} // Estado inicial
                        animate={{ opacity: 1, maxHeight: 500 }} // Animação ao abrir (ajuste maxHeight conforme necessário)
                        exit={{ opacity: 0, maxHeight: 0 }} // Animação ao fechar
                        transition={{ duration: 0.3, ease: "easeInOut" }} // Duração e tipo da animação
                        className="flex flex-col items-center gap-4 mt-4 p-4 border rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] overflow-hidden" // Adicione overflow-hidden
                    >
                        <h1 className='font-bold text-xl bg-primaryColor text-white p-2 rounded-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>{titulo}</h1>
                        <video className="w-full h-auto rounded-xl border" controls>
                            <source src={videoSrc} type="video/mp4" />
                            Seu navegador não suporta o vídeo.
                        </video>
                        <p className="mt-2 text-center mx-2 font-medium">
                            {paragrafo}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
