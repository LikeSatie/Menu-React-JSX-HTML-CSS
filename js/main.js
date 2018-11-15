const Menu = ({ items, opened }) => {
  return (
    <div className={opened ? 'menu menu-open' : 'menu'}>
      <div className="menu-toggle">
        <span />
      </div>
      {opened && (
        <nav>
          <ul>
            {items.map(item => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

const items = [
  { title: 'Главная страница', href: '#home' },
  { title: 'О компании', href: '#about' },
  { title: 'Контакты', href: '#contact' }
];

const app = (
  <div>
    <Menu items={items} opened />
    <Menu items={items} />
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
