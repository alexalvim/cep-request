import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../../src/containers/Home';
import { CEPInput, InfoText } from '../../src/containers/Home/styles';
import RowInfo from '../../src/components/RowInfo';

describe('Testing Home', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render input', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(CEPInput)).toHaveLength(1);
  });

  it('should render loading text', () => {
    const wrapper = shallow(<Home isLoading={true} />);

    expect(wrapper.find(InfoText).text()).toEqual('Carregando');
  });

  it('should render error text', () => {
    const wrapper = shallow(<Home isLoading={false} hasError={true} />);

    expect(wrapper.find(InfoText).text()).toEqual('Erro ao buscar CEP');
  });

  it('should render one RowInfo when there is only one information to show', () => {
    const wrapper = shallow(<Home isLoading={false} cepNumber='00000000' />);

    expect(wrapper.find(RowInfo)).toHaveLength(1);
  });

  it('should render all RowInfo when there are all of informations', () => {
    const wrapper = shallow(<Home
                              isLoading={false}
                              cepNumber='00000000'
                              uf='foo'
                              locale='bar'
                              place='baz' />);

    expect(wrapper.find(RowInfo)).toHaveLength(4);
  });

  it('should change the state value when call handleChangeCepInput', () => {
    const mockedEvt = {
      currentTarget: {
        value: 'foo',
      },
    };
    const wrapper = shallow(<Home/>);
    expect(wrapper.instance().state.inputCep).toEqual('');
    wrapper.instance().handleChangeCepInput(mockedEvt);
    expect(wrapper.instance().state.inputCep).toEqual('foo');
  });

  it('in handleSubmitCep should call cepFetchRequest when the value is valid', () => {
    const mockedFunction = jest.fn();
    const evt = {
      preventDefault: () => 'foo'
    }
    const wrapper = shallow(<Home cepFetchRequest={mockedFunction} />);
    wrapper.instance().setState({ inputCep: '00000000' });
    wrapper.instance().handleSubmitCep(evt);
    expect(mockedFunction).toHaveBeenCalled();
    expect(wrapper.instance().state.inputCep).toEqual('');
  });

  it('in handleSubmitCep should show an alert when the value is invalid', () => {
    const evt = {
      preventDefault: () => 'foo'
    }
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<Home/>);
    wrapper.instance().setState({ inputCep: '000' });
    wrapper.instance().handleSubmitCep(evt);
    expect(window.alert).toBeCalledWith('Digite um CEP válido!');
  });
});