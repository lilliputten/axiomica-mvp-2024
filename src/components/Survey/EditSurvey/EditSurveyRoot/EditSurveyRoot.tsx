import React from 'react';
import classNames from 'classnames';
import { PageTitle } from 'src/components/MUI';

import { TSurvey } from 'src/entities/Survey/types';
import { EditSurveyPage } from 'src/components/Survey/EditSurvey/EditSurveyPage';
import { SurveyNode, SurveyNodeFoldedContent } from 'src/components/Survey/SurveyNode';
import { useSortedSurveyItems } from 'src/components/Survey/SurveyNode/hooks';

interface TEditSurveyProps {
  surveyData: TSurvey;
  className?: string;
}

export const EditSurveyRoot: React.FC<TEditSurveyProps> = (props) => {
  const { surveyData, className } = props;
  const { id: surveyId, name, items } = surveyData;
  // Sort pages
  const sortedPages = useSortedSurveyItems(items);
  const title = name || `Survey ${surveyId}`;
  return (
    <SurveyNode
      nodeType="root"
      nodeId={surveyId}
      className={classNames(className)}
      root
      spacing={2}
      // indent
    >
      <PageTitle>{title}</PageTitle>
      <SurveyNodeFoldedContent nodeBaseType="root-content" root>
        {sortedPages.map((pageData) => {
          return <EditSurveyPage key={pageData.pageId} pageData={pageData} />;
        })}
      </SurveyNodeFoldedContent>
    </SurveyNode>
  );
};