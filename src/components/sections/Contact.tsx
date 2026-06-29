import {
    IconBrandGithub,
    IconMail,
} from "@tabler/icons-solidjs";
import { punctuation as P } from "../../data/punctuation";

export default function Contact() {
    return (
        <section class="min-h-screen flex items-center">
            <div class="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
                <h2 class="text-4xl font-bold tracking-tight">
                    Let's Build Something Together
                </h2>

                <p class="mt-4 max-w-xl text-lg leading-8 text-zinc-500">
                    如果你有任何合作机会{P.comma}
                    项目想法{P.comma}
                    或只是想打个招呼{P.comma}
                    欢迎随时联系我{P.period}
                </p>

                <div class="mt-5 flex items-center gap-8">
                    <a
                        href="mailto:davidsonrafael20@gmail.com"
                        aria-label="Email"
                        class="rounded-full border-2 border-zinc-500 p-1 text-zinc-500 transition-all hover:border-orange-500 hover:text-orange-500"
                    >
                        <IconMail size={28} />
                    </a>

                    <a
                        href="https://github.com/DavidsonRafaelK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        class="rounded-full border-2 border-zinc-500 p-1 text-zinc-500 transition-all hover:border-orange-500 hover:text-orange-500"
                    >
                        <IconBrandGithub size={28} />
                    </a>
                </div>
            </div>
        </section>
    );
}