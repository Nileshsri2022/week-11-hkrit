import Head from "next/head";
import {Button} from "@repo/ui/button"
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Button appName="button"className="hello"children="Click Me"></Button>
     hello world
    </>
  );
}
