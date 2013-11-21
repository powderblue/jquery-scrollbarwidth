/*globals jQuery*/
/**
 * @author Dan Bettles <dan@powder-blue.com>
 * @copyright Powder Blue Ltd 2013
 */

/**
 * @private
 * @type Integer
 */
jQuery.scrollbarWidth = undefined;

/**
 * Returns the width of the scrollbar in the current browser.
 * 
 * This will not return a value if the document is not ready; it will, in fact, throw an exception if it's called too 
 * early.
 * 
 * @returns Integer
 */
jQuery.getScrollbarWidth = function () {
    var oBodyEl,
        oTempEl,
        oTempElem;

    if (jQuery.scrollbarWidth === undefined) {
        oBodyEl = jQuery('body');

        if (oBodyEl.size() === 0) {
            throw "The document isn't ready, so the scrollbar width cannot be calculated.";
        }

        oTempEl = jQuery('<div/>').css({
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            width: '30px',
            overflow: 'scroll'
        });

        oBodyEl.append(oTempEl);
        oTempElem = oTempEl.get(0);
        jQuery.scrollbarWidth = oTempElem.offsetWidth - oTempElem.clientWidth;
        oTempEl.remove();
    }

    return jQuery.scrollbarWidth;
};