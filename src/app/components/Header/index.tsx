import Image from 'next/image';
import { GridContainer } from '../GridContainer';
import { ItemMenu } from './ItemMenu';
import { menuItems } from './menuItems';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image
            src="/logo.svg"
            width={142}
            height={32}
            alt="Logo Untitled UI"
          />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <Image src="/avatar.jpg" width={40} height={40} alt="Avatar" />
        </div>
      </GridContainer>
    </header>
  );
}
