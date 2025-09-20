type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Starter",
        desc: "Perfect for individuals and small creators getting started with video content",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started Free",
        features: [
            "5 video uploads per month",
            "Basic AI transcription & summarization",
            "3 social media platform exports",
            "Standard content templates",
            "Community support",
            "Basic analytics dashboard"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Creator",
        desc: "Ideal for content creators and small businesses scaling their video content",
        monthlyPrice: 29,
        yearlyPrice: 348,
        badge: "Most Popular",
        buttonText: "Start Creator Plan",
        features: [
            "50 video uploads per month",
            "Advanced AI content generation",
            "All social media platforms",
            "Custom brand voice & templates",
            "Priority email support",
            "Advanced analytics & insights",
            "Team collaboration (up to 3 members)",
            "Custom thumbnail generation"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Business",
        desc: "Comprehensive solution for agencies and large teams managing multiple brands",
        monthlyPrice: 99,
        yearlyPrice: 1188,
        badge: "Best Value",
        buttonText: "Contact Sales",
        features: [
            "Unlimited video uploads",
            "Premium AI models & customization",
            "White-label solution available",
            "Advanced team management",
            "Dedicated account manager",
            "Custom integrations & API access",
            "Enterprise-grade security",
            "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
