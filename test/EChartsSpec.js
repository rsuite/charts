import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { findDOMNode } from 'react-dom';
import sinon from 'sinon';
import { mount } from 'enzyme';

import ECharts from '../src/ECharts';
import option from '../docs/data/bar-base';


describe('ECharts', () => {

  it('Test lifecycle', () => {

    const willMount = sinon.spy();
    const didMount = sinon.spy();
    const willUnmount = sinon.spy();
    const diduMount = sinon.spy();

    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.componentWillUnmount = willUnmount;
        this.componentWillMount = willMount;
        this.componentDidMount = didMount;
        this.componentDidUpdate = diduMount;
      }
      render() {

        return (
          <ECharts
            option={option}
          />
        );
      }
    }
    const wrapper = mount(<Foo />);
    expect(willMount.callCount).to.equal(1);
    expect(didMount.callCount).to.equal(1);
    expect(willUnmount.callCount).to.equal(0);

    wrapper.setProps({
      'theme': 'abc'
    })
    expect(diduMount.callCount).to.equal(1);

    wrapper.unmount();
    expect(willUnmount.callCount).to.equal(1);

  });

  it('Should have click event in instance', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <ECharts
        onEvents={{
          click: (params) => { }
        }}
        option={option}
      />
    );

    assert.ok(instance.chart._$handlers.click);
  })

  it('Should call `legendunselected` callback', (done) => {
    const instance = ReactTestUtils.renderIntoDocument(
      <ECharts
        id="myECharts"
        onEvents={{
          legendunselected: (params) => {
            done();
          }
        }}
        option={option}
      />
    );

    ECharts.dispatchAction(instance, {
      type: 'legendUnSelect',
      name: '邮件营销'
    });

  })


  it('Should have a custom className', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <ECharts className="custom" option={option} />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = ReactTestUtils.renderIntoDocument(
      <ECharts style={{ fontSize }} option={option} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });

});
