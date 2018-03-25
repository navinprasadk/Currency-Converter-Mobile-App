import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'INR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.79;
const TEMP_LAST_CONVERTED = new Date();

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressBaseCurrency = () => {
    console.log('====================================');
    console.log('handle base currency');
    console.log('====================================');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };
  handlePressQuoteCurrency = () => {
    console.log('====================================');
    console.log('handle quote currency');
    console.log('====================================');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };
  handleTextChange = (text) => {
    console.log('====================================');
    console.log('change text', text);
    console.log('====================================');
  };
  handleSwapCurrency = () => {
    console.log('====================================');
    console.log('handle swap currency');
    console.log('====================================');
  };
  handleOptionsPress = () => {
    console.log('====================================');
    console.log('handle options press');
    console.log('====================================');
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar />
        <Header onPress={this.handleOptionsPress} />
        {/* <KeyboardAvoidingView behavior="padding"> */}
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChange={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          date={TEMP_LAST_CONVERTED}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        {/* </KeyboardAvoidingView> */}
      </Container>
    );
  }
}
