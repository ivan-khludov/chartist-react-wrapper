import { ChartitGraphProps } from './index.d';
import * as React from 'react';
import {
  IChartOptions,
  IResponsiveOptionTuple,
  ILineChartOptions,
  IBarChartOptions,
  IPieChartOptions,
} from 'chartist';

export interface ChartistGraphProps {
  type: string;
  data: object;
  className?: string;
  // options?: IChartOptions;
  options?: ILineChartOptions | IBarChartOptions | IPieChartOptions;
  responsiveOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>> | Array<IResponsiveOptionTuple<IPieChartOptions>> | Array<IResponsiveOptionTuple<IBarChartOptions>>;
  style?: React.CSSProperties;
  listener?: object;
}

export interface ChartistGraphLineProps extends ChartistGraphProps {
  type: 'Line';
  options?: ILineChartOptions;
  responsiveOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>>;
}

export interface ChartistGraphPieProps extends ChartistGraphProps {
  type: 'Pie';
  options?: IPieChartOptions;
  responsiveOptions?: Array<IResponsiveOptionTuple<IPieChartOptions>>;
}

export interface ChartistGraphBarProps extends ChartistGraphProps {
  type: 'Bar';
  options: IBarChartOptions;
  responsiveOptions?: Array<IResponsiveOptionTuple<IBarChartOptions>>;
}

export default class ChartistGraph extends React.Component<ChartistGraphProps> {}
