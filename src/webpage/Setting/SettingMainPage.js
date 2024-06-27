import { AccountSetting } from "./AcccountSetting"
import { SettingHeader } from "./SettingHeader"
import { UserPreferences } from "./UserPreferences"

export const SettingMainPage=()=>{
    return(
        <div>
            <div>
                <SettingHeader/>
            </div>
            <div>
                <UserPreferences/>
            </div>
            <div>
                <AccountSetting/>
            </div>
        </div>
    )
}