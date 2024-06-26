import React from 'react';
import classNames from 'classnames';

import { TSurveyQuestion } from 'src/entities/Survey/types';
import {
  SurveyNode,
  SurveyNodeFoldedContent,
  SurveyNodeRemark,
  SurveyNodeTitle,
} from 'src/components/Survey/SurveyNode';
import { getQuestionTypeName } from 'src/entities/Survey/helpers';
import { SurveyNodeHeader } from 'src/components/Survey/SurveyNode/SurveyNodeHeader';

import styles from './ViewSurveyQuestion.module.scss';

interface TViewSurveyQuestionProps {
  questionData: TSurveyQuestion;
  className?: string;
}

/** DEBUG: Show plain question data */
const debugShowRawQuestion = false;

export const ViewSurveyQuestionContent: React.FC<{ questionData: TSurveyQuestion }> = (props) => {
  const { questionData } = props;
  const {
    // prettier-ignore
    questionId,
    typeId,
    orderNumber,
    displayNumber,
    text,
    remark,
  } = questionData;
  const typeText = getQuestionTypeName(typeId);
  if (debugShowRawQuestion) {
    // prettier-ignore
    return (
      <>
        <SurveyNodeTitle>Question {questionId}</SurveyNodeTitle>
        <div><strong>typeId:</strong> {typeId}</div>
        <div><strong>orderNumber:</strong> {orderNumber}</div>
        <div><strong>displayNumber:</strong> {displayNumber}</div>
        <div><strong>text:</strong> {text}</div>
        <div><strong>remark:</strong> {remark}</div>
      </>
    );
  }
  return (
    <>
      {/*
      <SurveyNodeTitle>Question {questionId}</SurveyNodeTitle>
      <div className={classNames(styles.item, styles.number)}><span className={styles.itemLabel}>Number:</span> {displayNumber}</div>
      <div className={classNames(styles.item, styles.text)}><span className={styles.itemLabel}>Text:</span> {text}</div>
      {!!remark && (
        <div className={classNames(styles.item, styles.remark)}>
          <span className={styles.itemLabel}>Remark:</span> {remark}
        </div>
      )}
      */}
      <div className={classNames(styles.item, styles.type)}>
        <span className={styles.itemLabel}>Type:</span> {typeText}
      </div>
      <div className={classNames(styles.item, styles.comment)}>
        {/* DEBUG */}
        (Other parameters...)
      </div>
    </>
  );
};

export const ViewSurveyQuestion: React.FC<TViewSurveyQuestionProps> = (props) => {
  const { questionData, className } = props;
  const {
    // prettier-ignore
    questionId,
    displayNumber,
    text,
    remark,
    // typeId,
    // orderNumber,
  } = questionData;
  return (
    <SurveyNode
      nodeType="question"
      nodeId={questionId}
      className={classNames(className, styles.root)}
      indent
    >
      <SurveyNodeHeader
        // prettier-ignore
        prefix={displayNumber}
        title={text}
        icon="[ICON]"
        toolbar="[TOOLBAR]"
      />
      {remark && <SurveyNodeRemark>{remark}</SurveyNodeRemark>}
      <SurveyNodeFoldedContent nodeBaseType="question-content" className={styles.nodeContent}>
        <ViewSurveyQuestionContent questionData={questionData} />
      </SurveyNodeFoldedContent>
    </SurveyNode>
  );
};
