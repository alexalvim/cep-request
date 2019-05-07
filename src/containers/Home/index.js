import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cepFetchRequest } from '../../actions/cep';

import RowInfo from '../../components/RowInfo';
import Button from '../../components/Button';
import { Container, ContentBox, CEPInput, FormWrapper, InfoText } from './styles';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCep: '',
    }
  }

  handleChangeCepInput = (evt) => {
    const cep = evt.currentTarget.value;
    if(cep.length <= 8) {
      this.setState({
        inputCep: cep
      });
    }
  }

  handleSubmitCep = (evt) => {
    evt.preventDefault();
    if(this.state.inputCep.length >= 7) {
      this.props.cepFetchRequest(this.state.inputCep);
      this.setState({
        inputCep: ''
      });
    } else {
      alert('Digite um CEP válido!');
    }
  }

  render() {
    const { inputCep } = this.state;
    const { handleChangeCepInput, handleSubmitCep } = this;
    const { cepNumber, uf, locale, place, isLoading, hasError } = this.props;
    return (
      <Container>
        <ContentBox>
          <form
            onSubmit={handleSubmitCep}>
            <FormWrapper>
              <CEPInput
                type='number'
                value={inputCep}
                onChange={handleChangeCepInput} />
              <Button
                label='Buscar CEP'
                onClick={handleSubmitCep} />
            </FormWrapper>
          </form>
        </ContentBox>
        {isLoading && <InfoText>Carregando</InfoText>}
        {!isLoading && ((cepNumber && cepNumber) || hasError) &&
          <ContentBox>
            {!isLoading && cepNumber && cepNumber !== '' && 
              <Fragment>
                <RowInfo
                  label='CEP'
                  value={cepNumber} />
                {uf && uf !== '' &&
                  <RowInfo
                    label='Estado'
                    value={uf} />
                }
                {locale && locale !== '' &&
                  <RowInfo
                    label='Cidade'
                    value={locale} />
                }
                {place && place !== '' &&
                  <RowInfo
                    label='Logradouro'
                    value={place} />
                }
              </Fragment>
            }
            {!isLoading && hasError && <InfoText>Erro ao buscar CEP</InfoText>}
          </ContentBox>
        }
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  cepNumber: store.cepState.cepNumber,
  uf: store.cepState.uf,
  locale: store.cepState.locale,
  place: store.cepState.place,
  hasError: store.cepState.hasError,
  isLoading: store.cepState.isLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ cepFetchRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
