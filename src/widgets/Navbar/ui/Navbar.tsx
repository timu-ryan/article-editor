import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const {className} = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main page</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
        <AppLink to={'/shop'} theme={AppLinkTheme.SECONDARY}>Shop</AppLink>
      </div>
    </div>
  )
}

