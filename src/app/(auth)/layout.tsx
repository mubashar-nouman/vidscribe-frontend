import React from 'react';
import Link from 'next/link';
import Icons from '@/components/global/icons';

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-background">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_110%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
            
            {/* Header */}
            <header className="relative z-10 p-6">
                <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Icons.icon className="w-8 h-8" />
                    <span className="text-xl font-semibold font-heading">VidScribe</span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
                {children}
            </main>
        </div>
    );
};

export default AuthLayout
