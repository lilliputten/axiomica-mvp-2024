import React from 'react';
import classNames from 'classnames';

import { TSurveyPage } from 'src/entities/Survey/types';
import { ViewSurveySection } from 'src/components/Survey/ViewSurvey/ViewSurveySection';
import { SurveyNode, SurveyNodeFoldedContent } from 'src/components/Survey/SurveyNode';
import { useSortedSurveyItems } from 'src/components/Survey/SurveyNode/hooks';
import { SurveyNodeHeader } from 'src/components/Survey/SurveyNode/SurveyNodeHeader';

interface TViewSurveyPageProps {
  pageData: TSurveyPage;
  className?: string;
}

export const ViewSurveyPage: React.FC<TViewSurveyPageProps> = (props) => {
  const { pageData, className } = props;
  const { pageId, items } = pageData;
  // Sort sections
  const sortedSections = useSortedSurveyItems(items);
  return (
    <SurveyNode
      nodeType="page"
      nodeId={pageId}
      className={classNames(className)}
      // data-page-id={String(pageId)}
    >
      <SurveyNodeHeader
        // prettier-ignore
        // prefix={displayNumber}
        title={pageId}
        icon="[PAGE]"
        toolbar="[TOOLBAR]"
      />

      <SurveyNodeFoldedContent nodeBaseType="page-content" indent>
        {/*
        <pre>{JSON.stringify(sections, null, 2)}</pre>
        */}
        {sortedSections.map((sectionData) => {
          return <ViewSurveySection key={sectionData.sectionId} sectionData={sectionData} />;
        })}
      </SurveyNodeFoldedContent>
    </SurveyNode>
  );
};
