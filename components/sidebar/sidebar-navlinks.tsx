import { Href, usePathname, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import SidebarButton from "./sidebar-button";

type Page = {
    name: string,
    route?: Href,
    sub?: Page[]
}

const PAGES: Page[] = [
    { name: "Mission Infos", route: "/" },
    {
        name: "MRF", sub: [
            { name: "Departure/Arrival", route: "/departure-arrival" },
            { name: "Crew", route: "/crew" },
            { name: "Fuels", route: "/fuels" },
            { name: "AARs", route: "/aars" },
            { name: "Comments", route: "/comments" }
        ]
    },
    { name: "RDO reports", route: "/rdos" },
    { name: "Trainings", route: "/trainings" },
    { name: "FDRs", route: "/fdrs" },
];

export default function NavLinks() {
    return (
        <>
            {PAGES.map((page) => {
                if (page.route) return (
                    <Navlink
                        key={page.name}
                        {...page}
                    />
                );
                return (
                    <SubNavlinks
                        key={page.name}
                        {...page}
                    />
                );
            })}
        </>
    );
}

function Navlink(props: Page & { indented?: boolean }) {
    const router = useRouter();
    const pathname = usePathname();
    if (!props.route) return;
    return (
        <SidebarButton
            text={props.name}
            active={pathname === props.route}
            indented={props.indented}
            action={() => router.navigate(props.route!)}
        />
    );
}

function SubNavlinks(props: Page) {
    const pathname = usePathname();
    const [shown, setShown] = useState(false);

    const subrouteUsed = useMemo(() => {
        return props.sub?.some((page) => page.route === pathname);
    }, [props.sub, pathname]);

    useEffect(() => setShown(false), [pathname]);

    return (
        <>
            <SidebarButton
                text={props.name}
                action={() => setShown((prev) => !prev)}
            />
            {(shown || subrouteUsed) && props.sub?.map((page) => (
                <Navlink
                    key={page.name}
                    {...page}
                    indented={true}
                />
            ))}
        </>
    );
}
