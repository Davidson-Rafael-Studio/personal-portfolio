import { punctuation as P } from "../../data/punctuation";

export default function Hero() {
    return (
        <section class="min-h-screen flex items-center">
            <div class="mx-auto w-full max-w-6xl px-6">
                <div class="flex flex-col items-center text-center">
                    <h1 class="text-5xl font-extrabold tracking-tight">
                        你好，我是{" "}
                        <span class="text-orange-500"> Davidson</span>{P.comma}
                        <span class="mt-3 text-sky-500">
                            一名全栈开发者{P.period}
                        </span>
                    </h1>

                    <p class="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
                        我专注于构建高性能的 Web 应用程序{P.comma}
                        拥有丰富的前端和后端开发经验{P.period}
                        无论是设计用户界面还是优化服务器性能{P.comma}
                        我都能提供全面的解决方案{P.period}
                    </p>

                    <div class="mt-10 flex gap-4">
                        <button class="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
                            查看项目
                        </button>

                        <button class="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-zinc-700 transition hover:bg-zinc-100">
                            联系我
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}