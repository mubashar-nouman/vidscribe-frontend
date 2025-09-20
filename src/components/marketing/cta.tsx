import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                            Ready to transform your <br className="hidden md:block" /> videos into content gold?
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-6">
                            Join thousands of creators who are saving 15+ hours per week and growing their reach by 300%. 
                            Start your free trial today and see the magic happen.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-8">
                            <Button asChild size="lg" className="w-full md:w-max">
                                <Link href="/dashboard">
                                    Start Free Trial
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="secondary" className="w-full md:w-max">
                                <Link href="#pricing">
                                    View Pricing
                                </Link>
                            </Button>
                        </div>
                        <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>5 free videos to start</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#d4d4d8"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA
