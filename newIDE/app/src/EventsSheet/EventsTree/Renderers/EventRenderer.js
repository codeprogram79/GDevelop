// @flow
import * as React from 'react';
import {
  type InstructionsListContext,
  type InstructionContext,
  type ParameterContext,
} from '../../SelectionHandler';
import { type EventsScope } from '../../EventsScope.flow';
import { type ScreenType } from '../../../UI/Reponsive/ScreenTypeMeasurer';
import { type WidthType } from '../../../UI/Reponsive/ResponsiveWindowMeasurer';

export type EventRendererProps = {
  project: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  event: gdBaseEvent,
  disabled: boolean,

  onUpdate: () => void,
  selected: boolean,
  onAddNewInstruction: InstructionsListContext => void,
  onPasteInstructions: InstructionsListContext => void,
  onMoveToInstruction: (destinationContext: InstructionContext) => void,
  onMoveToInstructionsList: (
    destinationContext: InstructionsListContext
  ) => void,
  onInstructionClick: InstructionContext => void,
  onInstructionDoubleClick: InstructionContext => void,
  onInstructionContextMenu: (x: number, y: number, InstructionContext) => void,
  onInstructionsListContextMenu: (
    x: number,
    y: number,
    InstructionsListContext
  ) => void,
  onParameterClick: ParameterContext => void,
  selection: any,

  onOpenLayout: string => void,
  onOpenExternalEvents: string => void,

  leftIndentWidth: number,
  renderObjectThumbnail: string => React.Node,

  screenType: ScreenType,
  windowWidth: WidthType,
};
