import React, { useEffect, useRef, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './styles/OakChartDoughnut.scss';
import Chart from 'chart.js';
import { newId, receiveMessage } from '../events/MessageService';
import { findStepSize } from './ChartUtils';

interface Props {
  title?: string;
  stacked?: boolean;
  type: 'doughnut' | 'pie';
  datasets: any;
  categoryLabels?: string[];
}

const OakChartDoughnut = (props: Props) => {
  const chartRef = useRef(null);
  const [refId, setRefId] = useState(newId());
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    renderChart(findStepSize(props.datasets, props.type, props.stacked));
  }, [props.datasets]);

  const renderChart = stepSize => {
    new Chart(document.getElementById(refId), {
      type: 'doughnut',
      data: { datasets: props.datasets, labels: props.categoryLabels },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        //Customize chart options,
        cutoutPercentage: props.type === 'pie' ? 0 : 60,
        legend: {
          display: true,
          position: "right"
        },
        title: {
          display: props.title,
          text: props.title
        },
      },
    });
  };

  return (
    <div className="oak-chart-doughnut">
      <canvas
        id={refId}
        ref={chartRef}
        // height={height}
        // width={width}
      />
    </div>
  );
};

export default OakChartDoughnut;
