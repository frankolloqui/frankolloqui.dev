import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/Social";
import TypingTitle from "@/components/TypingTitle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 md:px-16">
        <div className="max-w-2xl w-full mt-20 mb-20">
          <header className="mb-16">
            <TypingTitle />
            <p className="text-lg text-custom-text font-light">
              Software Engineer • Creating Impact Through Technology
            </p>
          </header>

          <section className="space-y-8 mb-12">
            <article>
              <p className="text-lg text-custom-text leading-relaxed">
                Software engineer with a passion for crafting creative, innovative
                solutions to complex challenges. Skilled in developing and
                refining web technologies to drive efficiency and impact.
                Committed to making a meaningful difference through technology and
                inspiring influence in the tech landscape.
              </p>
            </article>

            <article>
              <p className="text-lg text-custom-text leading-relaxed">
                Recently, I&apos;ve embarked on the incredible journey of
                fatherhood, embracing its joys while continuing to make progress
                on my projects and learning. Alongside this, I&apos;ve rekindled my
                passion for photography, capturing special moments as they come.
              </p>
            </article>
          </section>

          <SocialLinks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
