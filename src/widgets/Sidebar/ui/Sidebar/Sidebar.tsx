import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import { useState } from "react";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const {className} = props;
  const [collapsed, setCollapsed] = useState(false);

  function toggleTheme() {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={toggleTheme}>toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        {/* Lang switcher  */}
      </div>
    </div>
  )
}