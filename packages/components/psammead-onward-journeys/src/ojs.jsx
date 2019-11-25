import React, { useState } from 'react';
import styled from 'styled-components';
import { C_EBON, C_STONE, C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { getGreatPrimer } from '@bbc/gel-foundations/typography';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { string } from 'prop-types';

const OJS = ({ script, service }) => {
  const [tabs, setTabs] = useState([
    {
      topic: 'Climate change',
      isSelected: true,
      id: 'toj-section-climate-change',
      href: '#section-climate-change',
    },
    {
      topic: 'Elon Musk',
      isSelected: false,
      id: 'toj-section-elon-musk',
      href: '#section-elon-musk',
    },
    {
      topic: 'Environment',
      isSelected: false,
      id: 'toj-section-environment',
      hred: '#section-environment',
    },
    {
      topic: 'YouTube',
      isSelected: false,
      id: 'toj-section-youtube',
      href: '#section-environment',
    },
  ]);

  const TabLink = styled.a`
    ${getGreatPrimer(script)};
    ${getSansBold(service)};
    color: ${C_EBON};
    background-color: ${C_STONE};
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    text-decoration: none;
    &[aria-selected='true'] {
      background-color: ${C_EBON};
      color: ${C_WHITE};
    }
  `;

  const selectTab = (prevIndex, newIndex) => {
    const newTabs = [...tabs];
    newTabs[prevIndex].isSelected = false;
    newTabs[newIndex].isSelected = true;
    setTabs(newTabs);
  };

  return (
    <div>
      {tabs.map(tab => (
        <TabLink
          key={tab.id}
          role="tab"
          id={tab.id}
          href={tab.href}
          aria-selected={tab.isSelected}
          selectTab={selectTab}
        >
          {tab.name}
        </TabLink>
      ))}
    </div>
  );
};

OJS.propTypes = {
  service: string.isRequired,
  script: string.isRequired,
};
export default OJS;
