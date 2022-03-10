import type { TurboModule } from "react-native-tscodegen-types"

import { TurboModuleRegistry } from "react-native-tscodegen-types"

export interface AriesAskarTscodegen extends TurboModule {}

// We MUST export this according to tscodegen. We are ignoring it however.
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
export default TurboModuleRegistry.getEnforcing<AriesAskarTscodegen>("AriesAskar")
