import { useState } from "react"
import Head from "next/head"
import Layout from "~/layout/layout"
import Link from "next/link"
import style from "../styles/Form.module.css"
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Layout>
            <Head>
                <title>
                    Login
                </title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                        Iniciar sesión
                    </h1>
                    <p className="w-3/4 mx-auto text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <form className="flex flex-col gap-5">
                    <div className={style.input_group}>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25}/>
                        </span>
                    </div>
                    <div className={style.input_group}>
                        <input 
                            type={`${showPassword ?"text" : "password" }`}
                            name="password"
                            placeholder="Contraseña"
                            className={style.input_text}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShowPassword(!showPassword)}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className="input-button">
                        <button type="submit"  className={style.login_button}>
                            Iniciar sesión
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={style.button_custom}>
                           <FcGoogle size={25} />
                            Iniciar sesión con Google
                        </button>
                    </div>
                </form>
                <p className="text-slate-950">
                    ¿No tienes una cuenta aún?

                    <Link href={"/register"} className={style.register_link}>
                        Registrate
                    </Link>
                </p>
            </section>
        </Layout>
    )
}