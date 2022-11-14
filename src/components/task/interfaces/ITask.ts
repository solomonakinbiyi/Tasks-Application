import { ITaskFooter } from "./ITaskFooter";
import { ITaskDescription } from "./ITaskDescription";
import { ITaskHeader } from "./ITaskHeader";

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
