import Container from "../global/container";
import Icons from "../global/icons";
import { SectionBadge } from "../ui/section-bade";
import { Card, CardContent } from "../ui/card";
import { ArrowRightIcon, UploadIcon, Wand2Icon, Share2Icon } from "lucide-react";
import MagicCard from "../ui/magic-card";
import Images from "../global/images";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Upload Your Video",
            description: "Simply upload your video file or paste a YouTube/Vimeo link. Our platform supports all major video formats.",
            icon: UploadIcon,
        },
        {
            number: "02",
            title: "AI Processing",
            description: "Our advanced AI analyzes your video content, extracts key insights, and generates multiple content formats automatically.",
            icon: Wand2Icon,
        },
        {
            number: "03",
            title: "Get Your Content",
            description: "Receive ready-to-publish blog posts, social media content, newsletters, and summaries tailored to your brand voice.",
            icon: Share2Icon,
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center mx-auto">
                    <SectionBadge title="How It Works" />
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold max-w-4xl !leading-snug mt-6">
                        From Video to Published Content in Under 30 Seconds
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl text-center text-accent-foreground/80 mt-6">
                        Our AI-powered platform makes content creation effortless. Upload once, get multiple formats ready to publish.
                    </p>
                </div>
            </Container>

            <Container>
                <div className="mt-16 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connection Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neutral-700 to-neutral-600 z-0">
                                        <ArrowRightIcon className="absolute -right-3 -top-2 w-6 h-6 text-neutral-500" />
                                    </div>
                                )}

                                <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                    <div className="bento-card w-full flex-row gap-6">
                                        <div className="w-full h-52 relative">
                                            <Images.ideation className="w-40 h-40" />
                                            <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                            {/* Step Number Overlay */}
                                            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-auto">
                                            <h4 className="text-xl font-heading font-medium heading">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowItWorks;
