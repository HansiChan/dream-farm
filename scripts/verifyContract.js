
let contract = '// SPDX-License-Identifier: MIT\n' +
    'pragma solidity ^0.8.7;\n' +
    '\n' +
    'pragma experimental ABIEncoderV2;\n' +
    '\n' +
    '    struct TokenMeta {\n' +
    '        uint256 id;\n' +
    '        string name;\n' +
    '        string uri;\n' +
    '        string hash;\n' +
    '        uint256 soldTimes;\n' +
    '        address minter;\n' +
    '    }\n' +
    '\n' +
    'abstract contract INft {\n' +
    '    function totalSupply() public virtual view returns (uint256);\n' +
    '\n' +
    '    function tokenMeta(uint256 _tokenId) public virtual view returns (TokenMeta memory);\n' +
    '\n' +
    '    function setTokenAsset(uint256 _tokenId, string memory _uri, string memory _hash, address _minter) public virtual;\n' +
    '\n' +
    '    function getSoldTimes(uint256 _tokenId) public virtual view returns (uint256);\n' +
    '}\n' +
    '\n' +
    'library SafeMath {\n' +
    '    /**\n' +
    '     * @dev Returns the addition of two unsigned integers, with an overflow flag.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\n' +
    '    unchecked {\n' +
    '        uint256 c = a + b;\n' +
    '        if (c < a) return (false, 0);\n' +
    '        return (true, c);\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\n' +
    '    unchecked {\n' +
    '        if (b > a) return (false, 0);\n' +
    '        return (true, a - b);\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\n' +
    '    unchecked {\n' +
    '        // Gas optimization: this is cheaper than requiring \'a\' not being zero, but the\n' +
    '        // benefit is lost if \'b\' is also tested.\n' +
    '        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\n' +
    '        if (a == 0) return (true, 0);\n' +
    '        uint256 c = a * b;\n' +
    '        if (c / a != b) return (false, 0);\n' +
    '        return (true, c);\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the division of two unsigned integers, with a division by zero flag.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\n' +
    '    unchecked {\n' +
    '        if (b == 0) return (false, 0);\n' +
    '        return (true, a / b);\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\n' +
    '    unchecked {\n' +
    '        if (b == 0) return (false, 0);\n' +
    '        return (true, a % b);\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the addition of two unsigned integers, reverting on\n' +
    '     * overflow.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `+` operator.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - Addition cannot overflow.\n' +
    '     */\n' +
    '    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n' +
    '        return a + b;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the subtraction of two unsigned integers, reverting on\n' +
    '     * overflow (when the result is negative).\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `-` operator.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - Subtraction cannot overflow.\n' +
    '     */\n' +
    '    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n' +
    '        return a - b;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the multiplication of two unsigned integers, reverting on\n' +
    '     * overflow.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `*` operator.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - Multiplication cannot overflow.\n' +
    '     */\n' +
    '    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n' +
    '        return a * b;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the integer division of two unsigned integers, reverting on\n' +
    '     * division by zero. The result is rounded towards zero.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `/` operator.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The divisor cannot be zero.\n' +
    '     */\n' +
    '    function div(uint256 a, uint256 b) internal pure returns (uint256) {\n' +
    '        return a / b;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n' +
    '     * reverting when dividing by zero.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\n' +
    '     * opcode (which leaves remaining gas untouched) while Solidity uses an\n' +
    '     * invalid opcode to revert (consuming all remaining gas).\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The divisor cannot be zero.\n' +
    '     */\n' +
    '    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\n' +
    '        return a % b;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n' +
    '     * overflow (when the result is negative).\n' +
    '     *\n' +
    '     * CAUTION: This function is deprecated because it requires allocating memory for the error\n' +
    '     * message unnecessarily. For custom revert reasons use {trySub}.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `-` operator.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - Subtraction cannot overflow.\n' +
    '     */\n' +
    '    function sub(\n' +
    '        uint256 a,\n' +
    '        uint256 b,\n' +
    '        string memory errorMessage\n' +
    '    ) internal pure returns (uint256) {\n' +
    '    unchecked {\n' +
    '        require(b <= a, errorMessage);\n' +
    '        return a - b;\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\n' +
    '     * division by zero. The result is rounded towards zero.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `/` operator. Note: this function uses a\n' +
    '     * `revert` opcode (which leaves remaining gas untouched) while Solidity\n' +
    '     * uses an invalid opcode to revert (consuming all remaining gas).\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The divisor cannot be zero.\n' +
    '     */\n' +
    '    function div(\n' +
    '        uint256 a,\n' +
    '        uint256 b,\n' +
    '        string memory errorMessage\n' +
    '    ) internal pure returns (uint256) {\n' +
    '    unchecked {\n' +
    '        require(b > 0, errorMessage);\n' +
    '        return a / b;\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n' +
    '     * reverting with custom message when dividing by zero.\n' +
    '     *\n' +
    '     * CAUTION: This function is deprecated because it requires allocating memory for the error\n' +
    '     * message unnecessarily. For custom revert reasons use {tryMod}.\n' +
    '     *\n' +
    '     * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\n' +
    '     * opcode (which leaves remaining gas untouched) while Solidity uses an\n' +
    '     * invalid opcode to revert (consuming all remaining gas).\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The divisor cannot be zero.\n' +
    '     */\n' +
    '    function mod(\n' +
    '        uint256 a,\n' +
    '        uint256 b,\n' +
    '        string memory errorMessage\n' +
    '    ) internal pure returns (uint256) {\n' +
    '    unchecked {\n' +
    '        require(b > 0, errorMessage);\n' +
    '        return a % b;\n' +
    '    }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'library Counters {\n' +
    '    struct Counter {\n' +
    '        // This variable should never be directly accessed by users of the library: interactions must be restricted to\n' +
    '        // the library\'s function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\n' +
    '        // this feature: see https://github.com/ethereum/solidity/issues/4637\n' +
    '        uint256 _value; // default: 0\n' +
    '    }\n' +
    '\n' +
    '    function current(Counter storage counter) internal view returns (uint256) {\n' +
    '        return counter._value;\n' +
    '    }\n' +
    '\n' +
    '    function increment(Counter storage counter) internal {\n' +
    '    unchecked {\n' +
    '        counter._value += 1;\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    function decrement(Counter storage counter) internal {\n' +
    '        uint256 value = counter._value;\n' +
    '        require(value > 0, "Counter: decrement overflow");\n' +
    '    unchecked {\n' +
    '        counter._value = value - 1;\n' +
    '    }\n' +
    '    }\n' +
    '\n' +
    '    function reset(Counter storage counter) internal {\n' +
    '        counter._value = 0;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'library Strings {\n' +
    '    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n' +
    '     */\n' +
    '    function toString(uint256 value) internal pure returns (string memory) {\n' +
    '        // Inspired by OraclizeAPI\'s implementation - MIT licence\n' +
    '        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n' +
    '\n' +
    '        if (value == 0) {\n' +
    '            return "0";\n' +
    '        }\n' +
    '        uint256 temp = value;\n' +
    '        uint256 digits;\n' +
    '        while (temp != 0) {\n' +
    '            digits++;\n' +
    '            temp /= 10;\n' +
    '        }\n' +
    '        bytes memory buffer = new bytes(digits);\n' +
    '        while (value != 0) {\n' +
    '            digits -= 1;\n' +
    '            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n' +
    '            value /= 10;\n' +
    '        }\n' +
    '        return string(buffer);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n' +
    '     */\n' +
    '    function toHexString(uint256 value) internal pure returns (string memory) {\n' +
    '        if (value == 0) {\n' +
    '            return "0x00";\n' +
    '        }\n' +
    '        uint256 temp = value;\n' +
    '        uint256 length = 0;\n' +
    '        while (temp != 0) {\n' +
    '            length++;\n' +
    '            temp >>= 8;\n' +
    '        }\n' +
    '        return toHexString(value, length);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n' +
    '     */\n' +
    '    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n' +
    '        bytes memory buffer = new bytes(2 * length + 2);\n' +
    '        buffer[0] = "0";\n' +
    '        buffer[1] = "x";\n' +
    '        for (uint256 i = 2 * length + 1; i > 1; --i) {\n' +
    '            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n' +
    '            value >>= 4;\n' +
    '        }\n' +
    '        require(value == 0, "Strings: hex length insufficient");\n' +
    '        return string(buffer);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'abstract contract Context {\n' +
    '    function _msgSender() internal view virtual returns (address) {\n' +
    '        return msg.sender;\n' +
    '    }\n' +
    '\n' +
    '    function _msgData() internal view virtual returns (bytes calldata) {\n' +
    '        return msg.data;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'abstract contract Ownable is Context {\n' +
    '    address private _owner;\n' +
    '\n' +
    '    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Initializes the contract setting the deployer as the initial owner.\n' +
    '     */\n' +
    '    constructor() {\n' +
    '        _setOwner(_msgSender());\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the address of the current owner.\n' +
    '     */\n' +
    '    function owner() public view virtual returns (address) {\n' +
    '        return _owner;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Throws if called by any account other than the owner.\n' +
    '     */\n' +
    '    modifier onlyOwner() {\n' +
    '        require(owner() == _msgSender(), "Ownable: caller is not the owner");\n' +
    '        _;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Leaves the contract without owner. It will not be possible to call\n' +
    '     * `onlyOwner` functions anymore. Can only be called by the current owner.\n' +
    '     *\n' +
    '     * NOTE: Renouncing ownership will leave the contract without an owner,\n' +
    '     * thereby removing any functionality that is only available to the owner.\n' +
    '     */\n' +
    '    function renounceOwnership() public virtual onlyOwner {\n' +
    '        _setOwner(address(0));\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n' +
    '     * Can only be called by the current owner.\n' +
    '     */\n' +
    '    function transferOwnership(address newOwner) public virtual onlyOwner {\n' +
    '        require(newOwner != address(0), "Ownable: new owner is the zero address");\n' +
    '        _setOwner(newOwner);\n' +
    '    }\n' +
    '\n' +
    '    function _setOwner(address newOwner) private {\n' +
    '        address oldOwner = _owner;\n' +
    '        _owner = newOwner;\n' +
    '        emit OwnershipTransferred(oldOwner, newOwner);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'library Address {\n' +
    '    /**\n' +
    '     * @dev Returns true if `account` is a contract.\n' +
    '     *\n' +
    '     * [IMPORTANT]\n' +
    '     * ====\n' +
    '     * It is unsafe to assume that an address for which this function returns\n' +
    '     * false is an externally-owned account (EOA) and not a contract.\n' +
    '     *\n' +
    '     * Among others, `isContract` will return false for the following\n' +
    '     * types of addresses:\n' +
    '     *\n' +
    '     *  - an externally-owned account\n' +
    '     *  - a contract in construction\n' +
    '     *  - an address where a contract will be created\n' +
    '     *  - an address where a contract lived, but was destroyed\n' +
    '     * ====\n' +
    '     */\n' +
    '    function isContract(address account) internal view returns (bool) {\n' +
    '        // This method relies on extcodesize, which returns 0 for contracts in\n' +
    '        // construction, since the code is only stored at the end of the\n' +
    '        // constructor execution.\n' +
    '\n' +
    '        uint256 size;\n' +
    '        assembly {\n' +
    '            size := extcodesize(account)\n' +
    '        }\n' +
    '        return size > 0;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n' +
    '     * `recipient`, forwarding all available gas and reverting on errors.\n' +
    '     *\n' +
    '     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n' +
    '     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n' +
    '     * imposed by `transfer`, making them unable to receive funds via\n' +
    '     * `transfer`. {sendValue} removes this limitation.\n' +
    '     *\n' +
    '     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n' +
    '     *\n' +
    '     * IMPORTANT: because control is transferred to `recipient`, care must be\n' +
    '     * taken to not create reentrancy vulnerabilities. Consider using\n' +
    '     * {ReentrancyGuard} or the\n' +
    '     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n' +
    '     */\n' +
    '    function sendValue(address payable recipient, uint256 amount) internal {\n' +
    '        require(address(this).balance >= amount, "Address: insufficient balance");\n' +
    '\n' +
    '        (bool success,) = recipient.call{value : amount}("");\n' +
    '        require(success, "Address: unable to send value, recipient may have reverted");\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Performs a Solidity function call using a low level `call`. A\n' +
    '     * plain `call` is an unsafe replacement for a function call: use this\n' +
    '     * function instead.\n' +
    '     *\n' +
    '     * If `target` reverts with a revert reason, it is bubbled up by this\n' +
    '     * function (like regular Solidity function calls).\n' +
    '     *\n' +
    '     * Returns the raw returned data. To convert to the expected return value,\n' +
    '     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `target` must be a contract.\n' +
    '     * - calling `target` with `data` must not revert.\n' +
    '     *\n' +
    '     * _Available since v3.1._\n' +
    '     */\n' +
    '    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n' +
    '        return functionCall(target, data, "Address: low-level call failed");\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n' +
    '     * `errorMessage` as a fallback revert reason when `target` reverts.\n' +
    '     *\n' +
    '     * _Available since v3.1._\n' +
    '     */\n' +
    '    function functionCall(\n' +
    '        address target,\n' +
    '        bytes memory data,\n' +
    '        string memory errorMessage\n' +
    '    ) internal returns (bytes memory) {\n' +
    '        return functionCallWithValue(target, data, 0, errorMessage);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n' +
    '     * but also transferring `value` wei to `target`.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - the calling contract must have an ETH balance of at least `value`.\n' +
    '     * - the called Solidity function must be `payable`.\n' +
    '     *\n' +
    '     * _Available since v3.1._\n' +
    '     */\n' +
    '    function functionCallWithValue(\n' +
    '        address target,\n' +
    '        bytes memory data,\n' +
    '        uint256 value\n' +
    '    ) internal returns (bytes memory) {\n' +
    '        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n' +
    '     * with `errorMessage` as a fallback revert reason when `target` reverts.\n' +
    '     *\n' +
    '     * _Available since v3.1._\n' +
    '     */\n' +
    '    function functionCallWithValue(\n' +
    '        address target,\n' +
    '        bytes memory data,\n' +
    '        uint256 value,\n' +
    '        string memory errorMessage\n' +
    '    ) internal returns (bytes memory) {\n' +
    '        require(address(this).balance >= value, "Address: insufficient balance for call");\n' +
    '        require(isContract(target), "Address: call to non-contract");\n' +
    '\n' +
    '        (bool success, bytes memory returndata) = target.call{value : value}(data);\n' +
    '        return verifyCallResult(success, returndata, errorMessage);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n' +
    '     * but performing a static call.\n' +
    '     *\n' +
    '     * _Available since v3.3._\n' +
    '     */\n' +
    '    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n' +
    '        return functionStaticCall(target, data, "Address: low-level static call failed");\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n' +
    '     * but performing a static call.\n' +
    '     *\n' +
    '     * _Available since v3.3._\n' +
    '     */\n' +
    '    function functionStaticCall(\n' +
    '        address target,\n' +
    '        bytes memory data,\n' +
    '        string memory errorMessage\n' +
    '    ) internal view returns (bytes memory) {\n' +
    '        require(isContract(target), "Address: static call to non-contract");\n' +
    '\n' +
    '        (bool success, bytes memory returndata) = target.staticcall(data);\n' +
    '        return verifyCallResult(success, returndata, errorMessage);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n' +
    '     * but performing a delegate call.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n' +
    '        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n' +
    '     * but performing a delegate call.\n' +
    '     *\n' +
    '     * _Available since v3.4._\n' +
    '     */\n' +
    '    function functionDelegateCall(\n' +
    '        address target,\n' +
    '        bytes memory data,\n' +
    '        string memory errorMessage\n' +
    '    ) internal returns (bytes memory) {\n' +
    '        require(isContract(target), "Address: delegate call to non-contract");\n' +
    '\n' +
    '        (bool success, bytes memory returndata) = target.delegatecall(data);\n' +
    '        return verifyCallResult(success, returndata, errorMessage);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n' +
    '     * revert reason using the provided one.\n' +
    '     *\n' +
    '     * _Available since v4.3._\n' +
    '     */\n' +
    '    function verifyCallResult(\n' +
    '        bool success,\n' +
    '        bytes memory returndata,\n' +
    '        string memory errorMessage\n' +
    '    ) internal pure returns (bytes memory) {\n' +
    '        if (success) {\n' +
    '            return returndata;\n' +
    '        } else {\n' +
    '            // Look for revert reason and bubble it up if present\n' +
    '            if (returndata.length > 0) {\n' +
    '                // The easiest way to bubble the revert reason is using memory via assembly\n' +
    '\n' +
    '                assembly {\n' +
    '                    let returndata_size := mload(returndata)\n' +
    '                    revert(add(32, returndata), returndata_size)\n' +
    '                }\n' +
    '            } else {\n' +
    '                revert(errorMessage);\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'interface IERC721Receiver {\n' +
    '    /**\n' +
    '     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n' +
    '     * by `operator` from `from`, this function is called.\n' +
    '     *\n' +
    '     * It must return its Solidity selector to confirm the token transfer.\n' +
    '     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n' +
    '     *\n' +
    '     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n' +
    '     */\n' +
    '    function onERC721Received(\n' +
    '        address operator,\n' +
    '        address from,\n' +
    '        uint256 tokenId,\n' +
    '        bytes calldata data\n' +
    '    ) external returns (bytes4);\n' +
    '}\n' +
    '\n' +
    'interface IERC165 {\n' +
    '    /**\n' +
    '     * @dev Returns true if this contract implements the interface defined by\n' +
    '     * `interfaceId`. See the corresponding\n' +
    '     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n' +
    '     * to learn more about how these ids are created.\n' +
    '     *\n' +
    '     * This function call must use less than 30 000 gas.\n' +
    '     */\n' +
    '    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n' +
    '}\n' +
    '\n' +
    'abstract contract ERC165 is IERC165 {\n' +
    '    /**\n' +
    '     * @dev See {IERC165-supportsInterface}.\n' +
    '     */\n' +
    '    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n' +
    '        return interfaceId == type(IERC165).interfaceId;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'interface IERC721 is IERC165 {\n' +
    '    /**\n' +
    '     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\n' +
    '     */\n' +
    '    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\n' +
    '     */\n' +
    '    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n' +
    '     */\n' +
    '    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the number of tokens in ``owner``\'s account.\n' +
    '     */\n' +
    '    function balanceOf(address owner) external view returns (uint256 balance);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the owner of the `tokenId` token.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `tokenId` must exist.\n' +
    '     */\n' +
    '    function ownerOf(uint256 tokenId) external view returns (address owner);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n' +
    '     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `from` cannot be the zero address.\n' +
    '     * - `to` cannot be the zero address.\n' +
    '     * - `tokenId` token must exist and be owned by `from`.\n' +
    '     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n' +
    '     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n' +
    '     *\n' +
    '     * Emits a {Transfer} event.\n' +
    '     */\n' +
    '    function safeTransferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId\n' +
    '    ) external;\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Transfers `tokenId` token from `from` to `to`.\n' +
    '     *\n' +
    '     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `from` cannot be the zero address.\n' +
    '     * - `to` cannot be the zero address.\n' +
    '     * - `tokenId` token must be owned by `from`.\n' +
    '     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n' +
    '     *\n' +
    '     * Emits a {Transfer} event.\n' +
    '     */\n' +
    '    function transferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId\n' +
    '    ) external;\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\n' +
    '     * The approval is cleared when the token is transferred.\n' +
    '     *\n' +
    '     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The caller must own the token or be an approved operator.\n' +
    '     * - `tokenId` must exist.\n' +
    '     *\n' +
    '     * Emits an {Approval} event.\n' +
    '     */\n' +
    '    function approve(address to, uint256 tokenId) external;\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the account approved for `tokenId` token.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `tokenId` must exist.\n' +
    '     */\n' +
    '    function getApproved(uint256 tokenId) external view returns (address operator);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Approve or remove `operator` as an operator for the caller.\n' +
    '     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - The `operator` cannot be the caller.\n' +
    '     *\n' +
    '     * Emits an {ApprovalForAll} event.\n' +
    '     */\n' +
    '    function setApprovalForAll(address operator, bool _approved) external;\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n' +
    '     *\n' +
    '     * See {setApprovalForAll}\n' +
    '     */\n' +
    '    function isApprovedForAll(address owner, address operator) external view returns (bool);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Safely transfers `tokenId` token from `from` to `to`.\n' +
    '     *\n' +
    '     * Requirements:\n' +
    '     *\n' +
    '     * - `from` cannot be the zero address.\n' +
    '     * - `to` cannot be the zero address.\n' +
    '     * - `tokenId` token must exist and be owned by `from`.\n' +
    '     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n' +
    '     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n' +
    '     *\n' +
    '     * Emits a {Transfer} event.\n' +
    '     */\n' +
    '    function safeTransferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId,\n' +
    '        bytes calldata data\n' +
    '    ) external;\n' +
    '}\n' +
    '\n' +
    '\n' +
    'interface IERC721Metadata is IERC721 {\n' +
    '    /**\n' +
    '     * @dev Returns the token collection name.\n' +
    '     */\n' +
    '    function name() external view returns (string memory);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the token collection symbol.\n' +
    '     */\n' +
    '    function symbol() external view returns (string memory);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n' +
    '     */\n' +
    '    function tokenURI(uint256 tokenId) external view returns (string memory);\n' +
    '}\n' +
    '\n' +
    'contract token {\n' +
    '    function transferFrom(address sender, address receiver, uint amount) public returns (bool){\n' +
    '        sender;\n' +
    '        receiver;\n' +
    '        amount;\n' +
    '    }\n' +
    '\n' +
    '    function balanceOf(address account) public view returns (uint256) {\n' +
    '        account;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'contract DreamFarmCrop is INft, Context, ERC165, IERC721, IERC721Metadata, IERC721Receiver, Ownable {\n' +
    '    using Address for address;\n' +
    '    using Strings for uint256;\n' +
    '    using Counters for Counters.Counter;\n' +
    '    Counters.Counter private _tokenIds;\n' +
    '\n' +
    '    mapping(uint256 => TokenMeta) public tokenOnChainMeta;\n' +
    '\n' +
    '    uint256 public current_supply = 10000;\n' +
    '    uint256 public MAX_SUPPLY = ~uint256(0);\n' +
    '    uint256 public current_sold = 0;\n' +
    '    string public baseURL;\n' +
    '\n' +
    '    // Token name\n' +
    '    string private _name;\n' +
    '\n' +
    '    // Token symbol\n' +
    '    string private _symbol;\n' +
    '\n' +
    '    // Mapping from token ID to owner address\n' +
    '    mapping(uint256 => address) internal _owners;\n' +
    '\n' +
    '    // Mapping owner address to token count\n' +
    '    mapping(address => uint256) private _balances;\n' +
    '\n' +
    '    // Mapping from token ID to approved address\n' +
    '    mapping(uint256 => address) private _tokenApprovals;\n' +
    '\n' +
    '    // Mapping from owner to operator approvals\n' +
    '    mapping(address => mapping(address => bool)) private _operatorApprovals;\n' +
    '\n' +
    '    mapping(uint256 => address) private _onSaleList;\n' +
    '\n' +
    '    uint public price = 0.01 * 10 ** 18;\n' +
    '\n' +
    '    uint256 public totalSales = 0;\n' +
    '\n' +
    '    //owner of tokenIds\n' +
    '    mapping(address => uint256[]) internal ownerTokens;\n' +
    '    mapping(uint256 => uint256) internal tokenIndexs;\n' +
    '    mapping(uint256 => address) internal tokenOwners;\n' +
    '\n' +
    '    constructor()\n' +
    '    {\n' +
    '        _name = "Dream Farm Crop";\n' +
    '        _symbol = "DFC";\n' +
    '        setBaseURL("https://www.dreamfarm.io/crop/token/");\n' +
    '    }\n' +
    '\n' +
    '    function setBaseURL(string memory _newBaseURL) public onlyOwner {\n' +
    '        baseURL = _newBaseURL;\n' +
    '    }\n' +
    '\n' +
    '    function setSupplies(uint _current_supply, uint _max_supply) public onlyOwner {\n' +
    '        require(_current_supply <= MAX_SUPPLY, "CAN_NOT_EXCEED_MAX_SUPPLY");\n' +
    '        current_supply = _current_supply;\n' +
    '        MAX_SUPPLY = _max_supply;\n' +
    '    }\n' +
    '\n' +
    '    function setNames(string memory name_, string memory symbol_) public onlyOwner {\n' +
    '        _name = name_;\n' +
    '        _symbol = symbol_;\n' +
    '    }\n' +
    '\n' +
    '    function totalSupply() public override view returns (uint256) {\n' +
    '        return MAX_SUPPLY;\n' +
    '    }\n' +
    '\n' +
    '    function supportsInterface(bytes4 interfaceId) public view override(ERC165, IERC165) returns (bool) {\n' +
    '        return\n' +
    '        interfaceId == type(IERC721).interfaceId ||\n' +
    '        interfaceId == type(IERC721Metadata).interfaceId ||\n' +
    '        super.supportsInterface(interfaceId);\n' +
    '    }\n' +
    '\n' +
    '    function balanceOf(address owner) public view override returns (uint256) {\n' +
    '        require(owner != address(0), "ERC721: balance query for the zero address");\n' +
    '        return _balances[owner];\n' +
    '    }\n' +
    '\n' +
    '    function ownerOf(uint256 tokenId) public view override returns (address) {\n' +
    '        address tokenOwner = _owners[tokenId];\n' +
    '        return tokenOwner;\n' +
    '    }\n' +
    '\n' +
    '    function name() public view override returns (string memory) {\n' +
    '        return _name;\n' +
    '    }\n' +
    '\n' +
    '    function symbol() public view override returns (string memory) {\n' +
    '        return _symbol;\n' +
    '    }\n' +
    '\n' +
    '    function tokenURI(uint256 tokenId) public view override returns (string memory) {\n' +
    '        return bytes(baseURL).length > 0 ? string(abi.encodePacked(baseURL, tokenId.toString())) : "";\n' +
    '    }\n' +
    '\n' +
    '    function approve(address to, uint256 tokenId) public override {\n' +
    '        address owner = ownerOf(tokenId);\n' +
    '        require(to != owner, "ERC721: approval to current owner");\n' +
    '\n' +
    '        require(\n' +
    '            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\n' +
    '            "ERC721: approve caller is not owner nor approved for all"\n' +
    '        );\n' +
    '\n' +
    '        _approve(to, tokenId);\n' +
    '    }\n' +
    '\n' +
    '    function getApproved(uint256 tokenId) public view override returns (address) {\n' +
    '        require(_exists(tokenId), "ERC721: approved query for nonexistent token");\n' +
    '\n' +
    '        return _tokenApprovals[tokenId];\n' +
    '    }\n' +
    '\n' +
    '    function setApprovalForAll(address operator, bool approved) public override {\n' +
    '        require(operator != _msgSender(), "ERC721: approve to caller");\n' +
    '\n' +
    '        _operatorApprovals[_msgSender()][operator] = approved;\n' +
    '        emit ApprovalForAll(_msgSender(), operator, approved);\n' +
    '    }\n' +
    '\n' +
    '    function isApprovedForAll(address owner, address operator) public view override returns (bool) {\n' +
    '        return _operatorApprovals[owner][operator];\n' +
    '    }\n' +
    '\n' +
    '    function transferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId\n' +
    '    ) public override {\n' +
    '        //solhint-disable-next-line max-line-length\n' +
    '        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n' +
    '\n' +
    '        _transfer(from, to, tokenId);\n' +
    '    }\n' +
    '\n' +
    '    function safeTransferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId\n' +
    '    ) public override {\n' +
    '        safeTransferFrom(from, to, tokenId, "");\n' +
    '    }\n' +
    '\n' +
    '    function safeTransferFrom(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId,\n' +
    '        bytes memory _data\n' +
    '    ) public override {\n' +
    '        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n' +
    '        _safeTransfer(from, to, tokenId, _data);\n' +
    '    }\n' +
    '\n' +
    '    function _safeTransfer(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId,\n' +
    '        bytes memory _data\n' +
    '    ) internal {\n' +
    '        _transfer(from, to, tokenId);\n' +
    '        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");\n' +
    '    }\n' +
    '\n' +
    '    function _exists(uint256 tokenId) internal view returns (bool) {\n' +
    '        return ownerOf(tokenId) != address(0);\n' +
    '    }\n' +
    '\n' +
    '    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {\n' +
    '        require(_exists(tokenId), "ERC721: operator query for nonexistent token");\n' +
    '        address owner = ownerOf(tokenId);\n' +
    '        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\n' +
    '    }\n' +
    '\n' +
    '    function _safeMint(address to, uint256 tokenId) internal {\n' +
    '        _safeMint(to, tokenId, "");\n' +
    '    }\n' +
    '\n' +
    '    function _safeMint(\n' +
    '        address to,\n' +
    '        uint256 tokenId,\n' +
    '        bytes memory _data\n' +
    '    ) internal {\n' +
    '        _mint(to, tokenId, true);\n' +
    '        require(\n' +
    '            _checkOnERC721Received(address(0), to, tokenId, _data),\n' +
    '            "ERC721: transfer to non ERC721Receiver implementer"\n' +
    '        );\n' +
    '    }\n' +
    '\n' +
    '    function _mint(address to, uint256 tokenId, bool emitting) internal {\n' +
    '        require(to != address(0), "ERC721: mint to the zero address");\n' +
    '        require(_owners[tokenId] == address(0), "ERC721: token already minted");\n' +
    '\n' +
    '        _balances[to] += 1;\n' +
    '        _owners[tokenId] = to;\n' +
    '\n' +
    '        if (emitting) {\n' +
    '            emit Transfer(address(0), to, tokenId);\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    function _transfer(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId\n' +
    '    ) internal {\n' +
    '        require(ownerOf(tokenId) == from || ownerOf(tokenId) == address(this), "ERC721: transfer of token that is not own");\n' +
    '\n' +
    '        // Clear approvals from the previous owner\n' +
    '        _approve(address(0), tokenId);\n' +
    '\n' +
    '        _balances[from] -= 1;\n' +
    '        _balances[to] += 1;\n' +
    '        _owners[tokenId] = to;\n' +
    '\n' +
    '        emit Transfer(from, to, tokenId);\n' +
    '    }\n' +
    '\n' +
    '    function _approve(address to, uint256 tokenId) internal {\n' +
    '        _tokenApprovals[tokenId] = to;\n' +
    '        emit Approval(ownerOf(tokenId), to, tokenId);\n' +
    '    }\n' +
    '\n' +
    '    function _checkOnERC721Received(\n' +
    '        address from,\n' +
    '        address to,\n' +
    '        uint256 tokenId,\n' +
    '        bytes memory _data\n' +
    '    ) private returns (bool) {\n' +
    '        if (to.isContract()) {\n' +
    '            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\n' +
    '                return retval == IERC721Receiver(to).onERC721Received.selector;\n' +
    '            } catch (bytes memory reason) {\n' +
    '                if (reason.length == 0) {\n' +
    '                    revert("ERC721: transfer to non ERC721Receiver implementer");\n' +
    '                } else {\n' +
    '                    assembly {\n' +
    '                        revert(add(32, reason), mload(reason))\n' +
    '                    }\n' +
    '                }\n' +
    '            }\n' +
    '        } else {\n' +
    '            return true;\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    function tokenMeta(uint256 _tokenId) public override view returns (TokenMeta memory) {\n' +
    '        return tokenOnChainMeta[_tokenId];\n' +
    '    }\n' +
    '\n' +
    '    function setCurrentSupplyAndPrice(uint256 _num,uint256 _price) public onlyOwner {\n' +
    '        uint supply = SafeMath.add(current_supply, _num);\n' +
    '        require(supply <= MAX_SUPPLY, "CAN_NOT_EXCEED_MAX_SUPPLY");\n' +
    '\n' +
    '        price = _price;\n' +
    '        current_supply = supply;\n' +
    '    }\n' +
    '\n' +
    '    function setTokenAsset(uint256 _tokenId, string memory _uri, string memory _hash, address _minter) public override onlyOwner {\n' +
    '        require(_exists(_tokenId), "Vsnft_setTokenAsset_notoken");\n' +
    '        TokenMeta storage meta = tokenOnChainMeta[_tokenId];\n' +
    '        meta.uri = _uri;\n' +
    '        meta.hash = _hash;\n' +
    '        meta.minter = _minter;\n' +
    '        tokenOnChainMeta[_tokenId] = meta;\n' +
    '    }\n' +
    '\n' +
    '    function setSale(uint256 _tokenId) public {\n' +
    '        require(_exists(_tokenId), "Vsnft_setTokenAsset_notoken");\n' +
    '        address sender = _msgSender();\n' +
    '        require(owner() == sender || ownerOf(_tokenId) == sender, "Invalid_Owner");\n' +
    '\n' +
    '        _transfer(sender, address(this), _tokenId);\n' +
    '        _onSaleList[_tokenId] = sender;\n' +
    '\n' +
    '        //record tokenIds\n' +
    '        uint256[] storage tokens = ownerTokens[sender];\n' +
    '        tokenIndexs[_tokenId] = tokens.length;\n' +
    '        tokens.push(_tokenId);\n' +
    '        tokenOwners[_tokenId] = sender;\n' +
    '    }\n' +
    '\n' +
    '    function offload(uint256 _tokenId, address receiver) public {\n' +
    '        require(_exists(_tokenId), "Vsnft_setTokenAsset_notoken");\n' +
    '        address sender = _msgSender();\n' +
    '        require(owner() == sender, "Invalid_Owner");\n' +
    '\n' +
    '        _transfer(address(this), receiver, _tokenId);\n' +
    '\n' +
    '        //remove tokenIds\n' +
    '        uint256 index = tokenIndexs[_tokenId];\n' +
    '        uint256[] storage tokens = ownerTokens[receiver];\n' +
    '        uint256 indexLast = tokens.length - 1;\n' +
    '\n' +
    '        uint256 tokenIdLast = tokens[indexLast];\n' +
    '        tokens[index] = tokenIdLast;\n' +
    '        tokenIndexs[tokenIdLast] = index;\n' +
    '        tokens.pop();\n' +
    '\n' +
    '        delete tokenOwners[_tokenId];\n' +
    '    }\n' +
    '\n' +
    '    function upgrade(uint256[15] calldata _tokenIdList, address receiver) public {\n' +
    '        for (uint i = 0; i < 15; ++i) {\n' +
    '            _transfer(receiver, address(0), _tokenIdList[i]);\n' +
    '        }\n' +
    '        uint256 newItemId = SafeMath.sub(MAX_SUPPLY, _tokenIds.current());\n' +
    '        _tokenIds.increment();\n' +
    '        _mint(receiver, newItemId, true);\n' +
    '    }\n' +
    '\n' +
    '    function getSoldTimes(uint256 _tokenId) public override view returns (uint256) {\n' +
    '        TokenMeta memory meta = tokenOnChainMeta[_tokenId];\n' +
    '        return meta.soldTimes;\n' +
    '    }\n' +
    '\n' +
    '    function buy(uint amount, uint adv_time) public payable {\n' +
    '        uint requiredValue = SafeMath.mul(amount, price);\n' +
    '        require(msg.value >= requiredValue, "Not_Enough_Payment");\n' +
    '        require(current_supply >= SafeMath.add(current_sold, amount), "Not_Enough_Stock");\n' +
    '\n' +
    '        for (uint i = 0; i < amount; ++i) {\n' +
    '            uint256 newItemId = SafeMath.sub(MAX_SUPPLY, _tokenIds.current());\n' +
    '            _tokenIds.increment();\n' +
    '            _mint(msg.sender, newItemId, true);\n' +
    '\n' +
    '            TokenMeta memory meta = TokenMeta(\n' +
    '                newItemId,\n' +
    '                "",\n' +
    '                "",\n' +
    '                "",\n' +
    '                1,\n' +
    '                owner());\n' +
    '\n' +
    '            tokenOnChainMeta[newItemId] = meta;\n' +
    '        }\n' +
    '\n' +
    '        totalSales += requiredValue;\n' +
    '\n' +
    '        current_sold = SafeMath.add(current_sold, amount);\n' +
    '    }\n' +
    '\n' +
    '    function onSaleTokenList(address _add) public view returns(uint256[] memory) {\n' +
    '        return ownerTokens[_add];\n' +
    '    }\n' +
    '\n' +
    '    function onERC721Received(\n' +
    '        address,\n' +
    '        address,\n' +
    '        uint256,\n' +
    '        bytes memory\n' +
    '    ) public virtual override returns (bytes4) {\n' +
    '        return this.onERC721Received.selector;\n' +
    '    }\n' +
    '\n' +
    '    function withdraw() public onlyOwner {\n' +
    '        uint balance = address(this).balance;\n' +
    '        Address.sendValue(payable(owner()), balance);\n' +
    '    }\n' +
    '}'

function main() {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://api-testnet.bscscan.com/api', true);

    // xhr.onload = success;
    //
    // xhr.onerror = error;
    //必须添加一个消息头content-type
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //要将请求参数放到send方法里面
    xhr.send(JSON.stringify({
        apikey: "7RXTC6NGKKKY24SUPEDP7UG5ZJJ5FBKCK5",                     //A valid API-Key is required
        module: 'contract',                             //Do not change
        action: 'verifysourcecode',                     //Do not change
        contractaddress: 0xC0151012d1DADA8f0dFA59972F8cB63869c2816F,   //Contract Address starts with 0x...
        sourceCode: contract,             //Contract Source Code (Flattened if necessary)
        codeformat: "solidity-single-file",             //solidity-single-file (default) or solidity-standard-json-input (for std-input-json-format support
        contractname: "DreamFarmCrop",         //ContractName (if codeformat=solidity-standard-json-input, then enter contractname as ex: erc20.sol:erc20)
        compilerversion: "v0.8.7+commit.e28d00a7",   // see https://bscscan.com/solcversions for list of support versions
        optimizationUsed: "0", //0 = No Optimization, 1 = Optimization used (applicable when codeformat=solidity-single-file)
        runs: 200,                                      //set to 200 as default unless otherwise  (applicable when codeformat=solidity-single-file)
        constructorArguements: "",   //if applicable
        evmversion: "",             //leave blank for compiler default, homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul (applicable when codeformat=solidity-single-file)
        licenseType: 3           //Valid codes 1-12 where 1=No License .. 12=Apache 2.0, see https://bscscan.com/contract-license-types
    }));

    xhr.onreadystatechange = function() {
        if(this.readyState===4 && this.status===200){
            console.log(this.responseText)
        }
    };
}

main();