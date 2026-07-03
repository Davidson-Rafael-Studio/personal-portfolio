import { IconBrandGithub, IconMail } from "@tabler/icons-solidjs";

export default function Navbar() {
    return (
        <header class="fixed inset-x-0 top-0 z-50">
            <div class="mx-auto max-w-6xl border-x border-b border-zinc-200 backdrop-blur-md">
                <nav class="flex items-center justify-between px-6 py-6">
                    <a
                        href="/"
                        class="text-lg font-semibold tracking-tight transition-colors hover:text-orange-500"
                    >
                        Davidson Rafael
                    </a>

                    <div class="flex items-center gap-6">
                        <a
                            href="mailto:davidsonrafael20@gmail.com"
                            aria-label="Email"
                            class="text-zinc-500 transition-colors hover:text-orange-500"
                        >
                            <IconMail size={22} />
                        </a>

                        <a
                            href="https://github.com/DavidsonRafaelK"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            class="text-zinc-500 transition-colors hover:text-orange-500"
                        >
                            <IconBrandGithub size={22} />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}