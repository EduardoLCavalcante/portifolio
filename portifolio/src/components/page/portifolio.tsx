"use client"

// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ExternalLink, LinkedinIcon } from "lucide-react"
import { motion } from "framer-motion"
import foto from "@/assets/141164334.jfif"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}



const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const badgeStyles:any = {
  blue: "bg-blue-900 text-blue-200",
  green: "bg-green-900 text-green-200",
  teal: "bg-teal-900 text-teal-200",
};

const socialLinks = [
  { icon: Github, url: "https://github.com/EduardoLCavalcante", name: "GitHub" },
  { icon: LinkedinIcon, url: "https://www.linkedin.com/in/joseecavalcante/", name: "LinkedIn" },
  { icon: Mail, url: "mailto:eduardocavalcante131@gmail.com", name: "E-mail" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <motion.header
        className="container mx-auto px-4 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            JE
          </motion.h1>
          <motion.div className="space-x-4" variants={staggerChildren}>
            {["Sobre", "Habilidades", "Projetos", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-${["blue", "teal", "green", "purple"][index]}-400 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </nav>
      </motion.header>

      <main className=" mx-auto px-4 py-12">
        <motion.section
          id="sobre"
          className="mb-20 text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <img
              src={`${foto}`}
              alt="foto-perfil"

          className="w-[275px] h-[275px] object-cover rounded-full mx-auto bg-gray-800 max-w-none"
            />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-blue-400">
            José Eduardo de L. Cavalcante
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-6 text-gray-300">
            Desenvolvedor Front-end especializado em React, Tailwind CSS e Supabase
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
          {socialLinks.map(({ icon: Icon, url, name }, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
        </motion.section>

        <motion.section
          id="habilidades"
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-center text-teal-400">
            Habilidades
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerChildren}>
            {[
              {
                title: "React",
                color: "blue",
                icon: "M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 002.4-.36c.48-.67.99-1.31 1.51-1.9z",
              },
              {
                title: "Tailwind CSS",
                color: "teal",
                icon: "M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z",
              },
              {
                title: "Supabase",
                color: "green",
                icon: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
              },
            ].map((skill) => (
              <motion.div key={skill.title} variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className={`bg-gray-800 border-blue-900`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center text-${skill.color}-400`}>
                      <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2">
                        <path fill="currentColor" d={skill.icon} />
                      </svg>
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    {skill.title === "React" &&
                      "Construindo interfaces de usuário modernas e eficientes com React e seu ecossistema."}
                    {skill.title === "Tailwind CSS" &&
                      "Criando designs bonitos e responsivos com o framework CSS utility-first."}
                    {skill.title === "Supabase" &&
                      "Utilizando Supabase para serviços de backend, bancos de dados em tempo real e autenticação."}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="projetos"
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-center text-green-400">
            Projetos
          </motion.h3>
          <motion.div className="grid grid-cols-1 items-center mx-auto max-w-screen-md gap-6" variants={staggerChildren}>
            {[
              {
                title: "Aplicativo React + Supabase + TailwindCSS",
                description: "Uma aplicação full-stack mostrando a integração do React com Supabase e o uso de uma coleção de componentes UI construídos com Tailwind CSS",
                color: "blue",
                badges: ["React", "Supabase","TailwindCSS"],
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className={`bg-gray-800 mx-auto border-${project.color}-900`}>
                  <CardHeader>
                    <CardTitle className={`text-${project.color}-400`}>{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      {index === 0
                        ? "Este projeto demonstra o poder de combinar as capacidades frontend do React com os serviços backend do Supabase."
                        : "Este projeto destaca a versatilidade e eficiência do Tailwind CSS na criação de designs bonitos e responsivos."}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">     
                    {project.badges.map((badge, badgeIndex) => {
                    const color:any = ["blue", "green", "teal"][badgeIndex % 3]; 

                    return (
                      <Badge key={badgeIndex} className={badgeStyles[color]}>
                        {badge}
                      </Badge>
                    );
                  })}

                    </div>
                    <a href="https://github.com/EduardoLCavalcante" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="text-gray-300 border-gray-700 hover:bg-blue-400">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Ver Projeto</span>
                    </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contato"
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-purple-400">
            Entre em Contato
          </motion.h3>
          <motion.p variants={fadeInUp} className="mb-4 text-gray-300">
            Interessado em trabalhar juntos? Vamos conversar!
          </motion.p>
          <motion.div  variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a  href="mailto:eduardocavalcante131@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
           <Mail className="mr-2 flex h-4 w-4" /> Contate-me
            </Button>
            </a>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        className="container mx-auto px-4 py-6 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; 2025 José Eduardo. Todos os direitos reservados.</p>
      </motion.footer>
    </div>
  )
}

