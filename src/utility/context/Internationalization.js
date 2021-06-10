import React from 'react';
import { IntlProvider } from 'react-intl';

import messages_en from '../../assets/data/locales/en.json';
import messages_de from '../../assets/data/locales/de.json';

const menu_messages = {
	en: messages_en,
	id: messages_de,
};

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
	state = {
		locale: 'id',
		messages: menu_messages['id'],
	};

	render() {
		const { children } = this.props;
		const { locale, messages } = this.state;
		return (
			<Context.Provider
				value={{
					state: this.state,
					switchLanguage: language => {
						this.setState({
							locale: language,
							messages: menu_messages[language],
						});
					},
				}}>
				<IntlProvider key={locale} locale={locale} messages={messages} defaultLocale="en">
					{children}
				</IntlProvider>
			</Context.Provider>
		);
	}
}

export { IntlProviderWrapper, Context as IntlContext };
