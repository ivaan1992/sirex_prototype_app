import { type ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({ children } : { children: ReactNode }) {
    return (
        <div className='flex h-screen bg-slate-950'>
            <div className="m-auto bg-zinc-900 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.bgImg}>
                    <div className={styles.sirexImg}>
                        <div className={styles.bg}></div>
                    </div>
                </div>
                <div className="right flex flex-col justify-evenly bg-slate-50">
                    <div className="text-center text-slate-50 py-10">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}