import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';
import OakPage from '../../oakui/OakPage';
import OakSection from '../../oakui/OakSection';
import { getProjectMembers } from './service';
import OakHeading from '../../oakui/OakHeading';
import OakForm from '../../oakui/OakForm';
import OakText from '../../oakui/OakText';
import { string } from 'prop-types';
import OakButton from '../../oakui/OakButton';
import { sendMessage } from '../../events/MessageService';
import OakFooter from '../../oakui/OakFooter';
import OakSelect from '../../oakui/OakSelect';
import TableDemo from './TableDemo';
import OakSubheading from '../../oakui/OakSubheading';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  location: any;
}

const initial_state_value = {
  name: '',
  description: '',
  originSystem: 'Quick books',
};

const UploadDocuments = (props: Props) => {
  const authorization = useSelector(state => state.authorization);
  const query = queryString.parse(props.location.search);
  const [state, setState] = useState(initial_state_value);

  const handleChange = event => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const save = () => {
    sendMessage('notification', true, {
      type: 'success',
      message: 'Created successfully',
    });
  };

  const reset = () => {
    setState(initial_state_value);
  };

  return (
    <OakPage>
      <OakSection>
        <OakSubheading
          title="Reconcilation page"
          subtitle="Upload your documents and do the reconcilation"
        />
        <OakForm>
          <OakText
            data={state}
            handleChange={handleChange}
            id="name"
            label="Name"
          />
          <OakText
            data={state}
            handleChange={handleChange}
            id="description"
            label="Description"
            multiline
          />
          <OakSelect
            data={state}
            handleChange={handleChange}
            id="originSystem"
            label="Source system"
            elements={['Quick books', 'Razor pay']}
          />
          <OakFooter align="right">
            <OakButton theme="secondary" variant="regular" action={save}>
              Reconcile
            </OakButton>
            <OakButton theme="default" variant="appear" action={reset}>
              Reset
            </OakButton>
          </OakFooter>
        </OakForm>
      </OakSection>
      <OakSection>
        <OakSubheading
          title="Table demo"
          subtitle="see TableDemo.tsx for details on how to use OakTable"
        />
        <TableDemo />
      </OakSection>
    </OakPage>
  );
};

export default UploadDocuments;
