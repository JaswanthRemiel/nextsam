"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ContributionWeek {
    days: ContributionDay[];
}

const CELL_SIZE = 12;
const GAP_SIZE = 2;

const DARK_COLORS: Record<number, string> = {
    0: "#1c1c1c",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
};

const LIGHT_COLORS: Record<number, string> = {
    0: "#eee9e3",
    1: "#a7d9b2",
    2: "#57c278",
    3: "#2da44e",
    4: "#116d32",
};

function generateContributionData(weeksNeeded: number): ContributionWeek[] {
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - (weeksNeeded * 7));
    startDate.setDate(startDate.getDate() - startDate.getDay());

    let currentDate = new Date(startDate);

    for (let w = 0; w < weeksNeeded; w++) {
        const week: ContributionDay[] = [];

        for (let day = 0; day < 7; day++) {
            const random = Math.random();
            let count = 0;
            let level = 0;

            if (random > 0.3) {
                if (random > 0.9) {
                    count = Math.floor(Math.random() * 10) + 10;
                    level = 4;
                } else if (random > 0.75) {
                    count = Math.floor(Math.random() * 5) + 5;
                    level = 3;
                } else if (random > 0.55) {
                    count = Math.floor(Math.random() * 3) + 2;
                    level = 2;
                } else {
                    count = 1;
                    level = 1;
                }
            }

            week.push({
                date: currentDate.toISOString().split("T")[0],
                count,
                level,
            });

            currentDate.setDate(currentDate.getDate() + 1);
        }

        weeks.push({ days: week });
    }

    return weeks;
}

export function GitHubContributions() {
    const [mounted, setMounted] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        setMounted(true);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const weeksNeeded = useMemo(() => {
        if (windowWidth === 0) return 53;
        return Math.ceil(windowWidth / (CELL_SIZE + GAP_SIZE));
    }, [windowWidth]);

    const contributionData = useMemo(() => generateContributionData(weeksNeeded), [weeksNeeded]);

    const colors = resolvedTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    if (!mounted) {
        return <div className="w-full h-[84px]" />;
    }

    return (
        <>
            <p className="font-sf-regular text-gray-100 mb-4">
                my github go brrrrrrrrrr
            </p>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#1c1c1c] overflow-hidden">
                <div
                    className="grid w-full"
                    style={{
                        gridTemplateColumns: `repeat(${weeksNeeded}, ${CELL_SIZE}px)`,
                        gap: `${GAP_SIZE}px`,
                    }}
                >
                    {contributionData.map((week, weekIdx) => (
                        <div
                            key={weekIdx}
                            className="flex flex-col"
                            style={{ gap: `${GAP_SIZE}px` }}
                        >
                            {week.days.map((day, dayIdx) => (
                                <div
                                    key={`${weekIdx}-${dayIdx}`}
                                    className="rounded-[2px]"
                                    style={{
                                        width: `${CELL_SIZE}px`,
                                        height: `${CELL_SIZE}px`,
                                        backgroundColor: colors[day.level] || colors[0],
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

