import { useState } from "react"
import Head from "next/head"
import Layout from "~/layout/layout"
import Link from "next/link"
import style from "../styles/Form.module.css"
import { HiAtSymbol, HiFingerPrint, HiUser } from "react-icons/hi";

export default function Register() {
    const [showPassword, setShowPassword] = useState({ password: false, cpassword: false });

    return (
        <Layout>
            <Head>
                <title>
                    Register
                </title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                        Registrate
                    </h1>
                    <p className="w-3/4 mx-auto text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <form className="flex flex-col gap-5">
                    <div className={style.input_group}>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Usuario"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiUser size={25}/>
                        </span>
                    </div>
                    <div className={style.input_group}>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25}/>
                        </span>
                    </div>
                    <div className={style.input_group}>
                        <input 
                            type={`${showPassword.password ?"text" : "password" }`}
                            name="password"
                            placeholder="Contraseña"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShowPassword({...showPassword, password: !showPassword.password})}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className={style.input_group}>
                        <input 
                            type={`${showPassword.cpassword ?"text" : "password" }`}
                            name="password"
                            placeholder="Confirmar Contraseña"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShowPassword({...showPassword, cpassword: !showPassword.cpassword})}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className="input-button">
                        <button type="submit"  className={style.login_button}>
                            Registrarse
                        </button>
                    </div>
                </form>
                <p className="text-slate-950">
                    ¿Ya estás registrado?

                    <Link href={"/login"} className={style.register_link}>
                        Inicia sesión
                    </Link>
                </p>
            </section>
        </Layout>
    )
}