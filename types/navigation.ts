export interface NavItem {
    label: string;
    href?: string;
    items?: NavItem[];
}

export interface NavigationItems {
    [key: string]: NavItem;
}

export type NavItemArray = NavItem[]; 