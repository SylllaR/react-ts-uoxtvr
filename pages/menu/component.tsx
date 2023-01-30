import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { ProductList } from '../../temp-redux/data';
import { Card, ModalCard } from '../../components';
import { ArrowLeft, ArrowRight } from '../../img';

const cx = classNames.bind(styles);

export const MenuPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const [groupIndex, setGroupIndex] = React.useState(0);
  const [style, setStyle] = React.useState(`translateX(${groupIndex * -100}%)`);

  const openModal = (id: number, category: string) => {
    const item = ProductList[category].find((item) => item.id === id);
    setModalData(item);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const Category = [
    {
      name: 'Блинчики',
      category: 'pancake',
    },
    {
      name: 'Пельмени и вареники',
      category: 'pelmeniVareniki',
    },
    {
      name: 'Чебуреки',
      category: 'meatDishes',
    },
    {
      name: 'Котлеты',
      category: 'cutlet',
    },
  ];

  const changeIndex = (index: number) => {
    setGroupIndex(index);
  };

  const categoriesLastIndex = Category.length - 1;

  React.useEffect(() => {
    setStyle(`translateX(${groupIndex * -100}%)`);
  }, [groupIndex]);

  const changeGroup = (side: string) => {
    setGroupIndex(side === 'left' ? groupIndex - 1 : groupIndex + 1);
  };

  return (
    <div className={cx('page')}>
      <div className={cx('tabs-container')}>
        <ul className={cx('tabs')}>
          {Category.map((i, index) => (
            <li
              key={i.category}
              className={cx('tabs-item', { red: index === groupIndex })}
              onClick={() => {
                changeIndex(index);
              }}
            >
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={cx('wrapper')}>
        <button
          className={cx('side-btn')}
          onClick={() => {
            changeGroup('left');
          }}
          disabled={groupIndex === 0}
        >
          <ArrowLeft />
        </button>

        <div className={cx('cards')}>
          {Category.map((cat) => (
            <div
              className={cx('cards-group')}
              key={cat.category + 'group'}
              style={{ transform: style }}
            >
              {ProductList[cat.category].map((item) => (
                <Card
                  key={item.name + item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  weight={item.weight}
                  properties={item.properties}
                  onClick={() => {
                    openModal(item.id, cat.category);
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            changeGroup('right');
          }}
          className={cx('side-btn', 'side-btn-right')}
          disabled={groupIndex === categoriesLastIndex}
        >
          <ArrowRight />
        </button>
      </div>

      {isOpenModal && <ModalCard closeModal={closeModal} data={modalData} />}
    </div>
  );
};
