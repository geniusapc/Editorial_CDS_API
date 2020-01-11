import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
     faEnvelope,
     faKey,
     faHome,
     faPlusCircle,
     faTrash,
     faEdit,
     faUser,
     faAddressCard,
     faTimesCircle,
     faServer,
     faSpinner,
     faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

import Layouts from "./layouts/Layouts";
import "./sass/custom.scss";

library.add(
     faEnvelope,
     faKey,
     faHome,
     faPlusCircle,
     faTrash,
     faEdit,
     faUser,
     faAddressCard,
     faTimesCircle,
     faServer,
     faSpinner,
     faInfoCircle
);

const App = () => {
     return (
          <>
               <Layouts />
          </>
     );
};

export default App;
