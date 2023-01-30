import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { ProductList } from '../../temp-redux/data';
import { ModalBorder, ModalBorderBig, CloseIcon } from '../../img';
import { BrushButton } from '../../components';

import * as Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

import getOptions from '../../helpers/getOptions';

const cx = classNames.bind(styles);

interface ModalCardProps {
  closeModal: () => void;
  data: Data;
}

interface Data {
  name: string;
  img: string;
  price: number;
  weight: number;
  consist: string;
  nutrients: Nutrients;
  properties?: string[];
}

interface Nutrients {
  protein: number;
  fat: number;
  ch: number;
}

export const ModalCard: React.FC<ModalCardProps> = ({ closeModal, data }) => {
  const item = 0; //hardcode

  return (
    <React.Fragment>
      <div className={cx('bkg')} />
      <div className={cx('wraper')}>
        <div className={cx('modal')}>
          <div className={cx('modal-close')}>
            <ModalBorder />
            <button className={cx('modal-close-btn')} onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
          <div className={cx('modal-img-container-border-big')}>
            <ModalBorderBig />
          </div>
          <div className={cx('modal-img-container')} tabIndex={10}>
            <div className={cx('modal-img-container-border')}>
              <ModalBorder />
            </div>
            <img className={cx('modal-img')} src={data.img} />
          </div>
          <div className={cx('modal-content')}>
            <h2 className={cx('modal-content-title')}>{data.name}</h2>
            <p className={cx('modal-content-consist')}>
              <span className={cx('red')}>Состав: </span>
              {data.consist}
            </p>

            <div className={cx('modal-charts')}>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('protein', data.nutrients)}
                />
                <span>Белки: {data.nutrients.protein} г</span>
              </div>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('fat', data.nutrients)}
                />
                <span>Жиры: {data.nutrients.fat} г</span>
              </div>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('carbhyd', data.nutrients)}
                />
                <span>Углеводы: {data.nutrients.ch} г</span>
              </div>
            </div>

            <div className={cx('modal-btn')}>
              <BrushButton title={`${data.price} грн / ${data.weight} г`} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
