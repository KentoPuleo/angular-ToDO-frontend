import {ListModel} from "../../model/list.model";

export interface MainState {
  tasks: ListModel[];
  isLoading: boolean;
  taskName: string;
  selectedTaskId: number;
}
