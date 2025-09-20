"use client";

import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Features" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Turn any video into <br /> multiple content formats
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Our AI-powered platform transforms your videos into blog posts, social media content, newsletters, and summaries in seconds.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-20 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icons.stars className="w-7 h-7 text-primary" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Get advanced analytics
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Track your performance with detailed analytics and optimize to get better results.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Images.analytics className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Content ideation
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Generate ideas for your content with our AI-powered tools to create engaging posts in seconds.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Images.ideation className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Seamless integrations
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Connect your favorite tools and platforms to streamline your workflow and save time.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Images.image className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Image generation with AI
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Create stunning images with AI-powered tools in seconds.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Images.hash className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Hashtags suggestions
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Get hashtag suggestions based on your content and audience to increase your reach and engagement.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard particles={true} className="group flex flex-col bg-primary/[0.08] hover:bg-primary/[0.12] transition-all duration-300 border border-primary/10 hover:border-primary/20">
                            <div className="p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icons.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-heading font-semibold heading mb-3 group-hover:text-primary transition-colors duration-300">
                                    Smart automation
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                    Automate your content creation workflow with intelligent scheduling and optimization.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Features
