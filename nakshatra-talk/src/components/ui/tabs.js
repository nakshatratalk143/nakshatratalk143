export const Tabs = ({ children }) => <div>{children}</div>;
export const TabsList = ({ children, className }) => <div className={className}>{children}</div>;
export const TabsTrigger = ({ children, value }) => <button>{children}</button>;