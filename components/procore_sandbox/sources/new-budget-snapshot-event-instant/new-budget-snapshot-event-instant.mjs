import component from "../../../procore/sources/new-budget-snapshot-event-instant/new-budget-snapshot-event-instant.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable pipedream/required-properties-type */
/* eslint-disable pipedream/required-properties-name */

export default {
  ...component,
  ...utils.getAppProps(component),
  key: "procore_sandbox-new-budget-snapshot-event-instant",
  description: "Emit new event when a new budget snapshot event is created. [See the documentation](https://developers.procore.com/reference/rest/hooks?version=latest).",
  version: "0.0.1",
};

